namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Web.Http.Abstractions;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;

	[ExpressionConverterAttribute("PricePerSquare")]
	public class UsrPricePerSquareConverter : IExpressionConverter
	{
		private UserConnection _userConnection;
		private string _invalidIncomingValue;
		private string _nullUserConnection;

		private void SetResources() {
			string sourceCodeName = "UsrPricePerSquareConverter";
			_invalidIncomingValue = new LocalizableString(_userConnection.ResourceStorage, sourceCodeName, "LocalizableStrings.InvalidIncomingValue.Value");
			_nullUserConnection =  new LocalizableString(_userConnection.ResourceStorage, sourceCodeName, "LocalizableStrings.NullUserConnection.Value");
		}

		public string Evaluate(object value, string arguments = "")
		{
			try {
				if (value == null) {
					return _invalidIncomingValue;
				}
				if (!Guid.TryParse(value.ToString(), out Guid realEstateId)) {
					return _invalidIncomingValue;
				}
				_userConnection = (UserConnection)HttpContext.Current.Session["UserConnection"];

				if (_userConnection == null) {
					return _invalidIncomingValue;
				}
				
				SetResources();
				return GetPricePerSquare(realEstateId);
			}
			catch (Exception e) {
				return e.Message;
			}
		}

		private string GetPricePerSquare(Guid recordId) {
			
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrRealEstate");
			esq.AddColumn("UsrPrice");
			esq.AddColumn("UsrSquare");
			var entity =  esq.GetEntity(_userConnection, recordId);
			
			if (entity == null) {
				return "0";
			}
			
			var price = entity.GetTypedColumnValue<decimal>("UsrPrice");
			var square = entity.GetTypedColumnValue<decimal>("UsrSquare");

			if (square == 0) {
				return price.ToString("0.##");
			}
				
			var pricePerSquare = price / square;
			return pricePerSquare.ToString("0.##");
		}
	}
}
