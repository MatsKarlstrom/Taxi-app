
<!-- Anledningen till att vi skapar en factory är för att kunna kapsla in http-servicen. -->
factory("client-account", function client-accountfactory() {
	return { 
		all: function() {
		return $http({method: "GET", url: "/client-account"}); )};
	)},
	create: function(client-account) {
		return $http({method: "POST", url: "/client-account", data: client-account});
		}
});
