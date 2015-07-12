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

angular.module('ngDjangoRestAuthHelper').run(function(djangoAuth){
    djangoAuth.initialize(helper.settings.API_URL, helper.settings.use_session);
});


