using System;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using System.Runtime.Serialization;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration {
	[DataContract]
	public class RealEstateRequest {
		[DataMember(Name = "TypeId")]
		public Guid? TypeId { get; set; }

		[DataMember(Name = "OfferTypeId")]
		public Guid? OfferTypeId { get; set; }
	}

	[DataContract]
	public class RealEstateResponse {
		[DataMember(Name = "TotalPrice")]
		public decimal TotalPrice { get; set; }

		[DataMember(Name = "Error")]
		public string Error { get; set; } = "";
	}

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class UsrRealEstateService : BaseService {
		
		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "GetTotalPrice", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare)]
		public RealEstateResponse GetTotalPrice(RealEstateRequest request) {
			if (!IsValidRequest(request)) {
				return InvalidRequest();
			}

			try {
				var total = GetTotalPriceByTypes(request);
				return new RealEstateResponse { TotalPrice = total };
			}
			catch (Exception ex) {
				return GetTotalPriceError(ex.Message);
			}
		}
		
		private bool IsValidRequest (RealEstateRequest request) {
			if (request == null ) {
				return false;
			}
			if (!request.TypeId.HasValue || request.TypeId == Guid.Empty) {
				return false;
			} 
			if (!request.OfferTypeId.HasValue || request.OfferTypeId == Guid.Empty) {
				return false;
			}
			return true;
		}
		
		private RealEstateResponse InvalidRequest() {
			return new RealEstateResponse { 
				TotalPrice = -1,
				Error = "Invalid request"
			};
		}
		private RealEstateResponse GetTotalPriceError(string error) {
			return new RealEstateResponse { Error = error };
		}

		private decimal GetTotalPriceByTypes (RealEstateRequest request) {
			var select = new Select(UserConnection)
				.Column(Func.Sum("UsrPrice")).As("TotalPrice")
				.From("UsrRealEstate")
				.Where("UsrTypeId").IsEqual(Column.Parameter(request.TypeId.Value))
				.And("UsrOfferTypeId").IsEqual(Column.Parameter(request.OfferTypeId.Value))
				as Select;

			decimal totalPrice = 0;

			using (var dbExecutor = UserConnection.EnsureDBConnection())
			using (var reader = select.ExecuteReader(dbExecutor)) {
				if (reader.Read() && !reader.IsDBNull(0)) {
					totalPrice = reader.GetDecimal(0);
				}
			}
			return totalPrice;
		} 
	}
}