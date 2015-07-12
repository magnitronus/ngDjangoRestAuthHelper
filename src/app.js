angular.module('ngDjangoRestAuthHelper', ['ngCookies']);

angular.module('ngDjangoRestAuthHelper').provider('ngDjangoRestAuthHelper', function () {
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
        };
});

angular.module('ngDjangoRestAuthHelper').run(function(djangoAuth, ngDjangoRestAuthHelper){
    djangoAuth.initialize(ngDjangoRestAuthHelper.settings.API_URL, 
                          ngDjangoRestAuthHelper.settings.use_session);
});


