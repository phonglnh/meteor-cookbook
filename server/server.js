/**
 * Created by phonglnh on 12/22/16.
 */
Meteor.methods({
    resetShapes: function () {
        Shapes.remove({});
    }
})