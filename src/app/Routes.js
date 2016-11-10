"use strict";
/**
 * Created by nikita_glukhi on 10/6/16.
 */
var router_1 = require('@angular/router');
var HomeComponent_1 = require('./Components/HomeComponent');
var AboutComponent_1 = require('./Components/AboutComponent');
var ContactComponent_1 = require('./Components/ContactComponent');
var Results_1 = require("./Results");
var Results1_1 = require("./Results1");
var routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'mathematics', component: HomeComponent_1.HomeComponent },
    { path: 'about', component: AboutComponent_1.AboutComponent },
    { path: 'contact', component: ContactComponent_1.ContactComponent },
    { path: 'contactus', redirectTo: 'contact' },
    { path: 'results/:res/:unres/:n/:sn', component: Results_1.ResultComponent },
    { path: 'results1/:res1/:unres1', component: Results1_1.Results1Component },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=Routes.js.map
