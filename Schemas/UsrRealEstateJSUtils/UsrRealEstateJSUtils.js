 define("UsrRealEstateJSUtils", [], function () {
	return {
		calculateCommission: async function (request) {
			var price = await request.$context.UsrPrice;
			var typeCommisPercent = await request.$context.UsrCommissionPercent;
			if (!price || !typeCommisPercent) {
				request.$context.UsrCommission = 0;
				return;
			}
			var commission = (price * typeCommisPercent) / 100;
			request.$context.UsrCommission = commission;
		}
	};
});