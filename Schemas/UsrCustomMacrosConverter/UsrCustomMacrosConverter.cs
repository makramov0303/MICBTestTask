namespace Terrasoft.Configuration
{
	using System;
	using System.Text;

	#region Class: CustomMacrosConverter
	
	[ExpressionConverterAttribute("CustomMacros")]
	public class UsrCustomMacrosConverter : IExpressionConverter 
	{

		#region Methods: Public
		
		public string Evaluate(object value, string arguments = "") {
			//Здес можно делать всё, но я буду вернуть только текст
			return "Этот текст сгенерирован с помощью макроса!";
		}

		#endregion

	}

	#endregion

}
