'use strict';

angular.module('angularCrumbtrail', []).directive('angularCrumbtrail', function ($rootScope) {
	return {
		scope: false,
		restrict: 'AE',
		template:   '<ol class="{{angularbreadcrumbs.template}}" data-ng-if="angularCrumbTrailData.length">' +
					'<li data-ng-repeat="breadcrumb in angularCrumbTrailData">' +
						'<a data-ng-href="{{breadcrumb.url}}" data-ng-bind="breadcrumb.label" data-ng-class="{ active: $last }"></a><span data-ng-if="!$last &amp;&amp; angularbreadcrumbs.separator" data-ng-bind="angularbreadcrumbs.separator"></span>' +
					'</li>' +
					'</ol>',
		link: function ($scope, element, attrs) {
			$scope.angularbreadcrumbs = {};

			if (attrs.template == 'bootstrap') $scope.angularbreadcrumbs.template = 'breadcrumb';
			else $scope.angularbreadcrumbs.template = 'angularcrumbtrail';
			if (attrs.separator) $scope.angularbreadcrumbs.separator = " " + attrs.separator;
		},
	};
});
