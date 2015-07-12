var helper = angular.module('ngDjangoRestAuthHelper', []);

helper.provider('ngDjangoRestAuthHelper', function () {
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

helper.run(function(djangoAuth){
    djangoAuth.initialize(helper.settings.API_URL, helper.settings.use_session);
});


