/**
 * Created by phonglnh on 12/22/16.
 */

Template.firstTemplate.helpers({
    shapeCount: function () {
        return Shapes.find().count();
    },

   rawInsert: function () {
        return "<div><strong>Raw HTML!</strong></div>";
   }
});

Template.one.helpers({
   svgShapes: function () {
       return Shapes.find();
   }
});

Template.firstTemplate.events({
   'click svg': function (e, t) {
       var xpos, ypos;
       if (e.offsetX == undefined) {
           xpos = e.pageX - $('#shapes').offset().left;
           ypos = e.pageY - $('#shapes').offset().top;
       } else {
           xpos = e.offsetX;
           ypos = e.offsetY;
       }
       choices = ['#bada55', '#B43831', '783BA3',
           '#00AB1B', '#143275', '#FFA700'];
           color = Random.choice(choices);
       border = Random.choice(choices);
       Shapes.insert({x: xpos, y:ypos, border: border, color: color});
   },
    // 'dblclick' : function (e,t) {
    //     Meteor.call('resetShapes');
    // }
    'click #resetShapes': function () {
        Meteor.call('resetShapes');
    },
});


//make this func become global function
Template.registerHelper('randColor',function () {
    choices = ['#bada55', '#B43831', '783BA3',
        '#00AB1B', '#143275', '#FFA700'];
    return Random.choice(choices);
})

Template.registerHelper('shapeCount', function () {
    return Shapes.find().count();
});

