angular.module('ngDjangoRestAuthHelper', ['ngCookies']);

angular.module('ngDjangoRestAuthHelper').provider('ngDjangoRestAuthProvider', function () {
        var settings = this.settings = {
            API_URL : '/rest-auth',
            use_session: true
        };
        
        this.config = function (newSettings) {
            angular.extend(settings, newSettings);
        };
        
        this.$get = function () {
            var thisModule = this;
            
            var publicMethods = {
                settings: thisModule.settings
            };
            return publicMethods;
        };
});

angular.module('ngDjangoRestAuthHelper').run(function(djangoAuth, ngDjangoRestAuthProvider){
    djangoAuth.initialize(ngDjangoRestAuthProvider.settings.API_URL, 
                          ngDjangoRestAuthProvider.settings.use_session);
});


