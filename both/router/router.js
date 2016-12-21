
Router.configure({
    layout: 'routeexample'
});

Route.map(function () {
    this.route('thing1',{
        path: '/'
    });
    this.route('thing2', {
       path: '/second'
    });
});