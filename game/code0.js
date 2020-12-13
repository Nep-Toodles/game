gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDplayerObjects1= [];
gdjs.New_32sceneCode.GDplayerObjects2= [];
gdjs.New_32sceneCode.GDplayerObjects3= [];
gdjs.New_32sceneCode.GDenemyObjects1= [];
gdjs.New_32sceneCode.GDenemyObjects2= [];
gdjs.New_32sceneCode.GDenemyObjects3= [];
gdjs.New_32sceneCode.GDplayernameObjects1= [];
gdjs.New_32sceneCode.GDplayernameObjects2= [];
gdjs.New_32sceneCode.GDplayernameObjects3= [];
gdjs.New_32sceneCode.GDsandObjects1= [];
gdjs.New_32sceneCode.GDsandObjects2= [];
gdjs.New_32sceneCode.GDsandObjects3= [];
gdjs.New_32sceneCode.GDgrassObjects1= [];
gdjs.New_32sceneCode.GDgrassObjects2= [];
gdjs.New_32sceneCode.GDgrassObjects3= [];
gdjs.New_32sceneCode.GDexitObjects1= [];
gdjs.New_32sceneCode.GDexitObjects2= [];
gdjs.New_32sceneCode.GDexitObjects3= [];
gdjs.New_32sceneCode.GDpointsObjects1= [];
gdjs.New_32sceneCode.GDpointsObjects2= [];
gdjs.New_32sceneCode.GDpointsObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.New_32sceneCode.GDexitObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.New_32sceneCode.GDexitObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDgrassObjects2Objects = Hashtable.newFrom({"grass": gdjs.New_32sceneCode.GDgrassObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDsandObjects1Objects = Hashtable.newFrom({"sand": gdjs.New_32sceneCode.GDsandObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("grass"), gdjs.New_32sceneCode.GDgrassObjects2);
gdjs.copyArray(gdjs.New_32sceneCode.GDplayerObjects1, gdjs.New_32sceneCode.GDplayerObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDgrassObjects2Objects, false, runtimeScene, false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 130, 0);
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("sand"), gdjs.New_32sceneCode.GDsandObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDsandObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 100, 0);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDpointsObjects1Objects = Hashtable.newFrom({"points": gdjs.New_32sceneCode.GDpointsObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDpointsObjects1Objects = Hashtable.newFrom({"points": gdjs.New_32sceneCode.GDpointsObjects1});gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.New_32sceneCode.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("playername"), gdjs.New_32sceneCode.GDplayernameObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayernameObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayernameObjects1[i].setX((( gdjs.New_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDplayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayernameObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayernameObjects1[i].setY((( gdjs.New_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDplayerObjects1[0].getPointY("")) - 20);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDplayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDplayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDexitObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDexitObjects1Objects, false);
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, 440, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].addForceTowardObject(gdjs.New_32sceneCode.GDenemyObjects1[i], 90.0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, 440, true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].addForceTowardObject(gdjs.New_32sceneCode.GDenemyObjects1[i], 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, 20, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDenemyObjects1[i].getScaleY() < (( gdjs.New_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDplayerObjects1[0].getScaleY()) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDenemyObjects1[k] = gdjs.New_32sceneCode.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDenemyObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setScale(gdjs.New_32sceneCode.GDplayerObjects1[i].getScale() + (0.2));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].setX(1004);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, 20, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDenemyObjects1[i].getScaleY() > (( gdjs.New_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDplayerObjects1[0].getScaleY()) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDenemyObjects1[k] = gdjs.New_32sceneCode.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDenemyObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setX(951);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, 440, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].addForceTowardObject((gdjs.New_32sceneCode.GDplayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDplayerObjects1[0] : null), 90.0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("points"), gdjs.New_32sceneCode.GDpointsObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDpointsObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDpointsObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].setScale(gdjs.New_32sceneCode.GDenemyObjects1[i].getScale() + (0.1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDpointsObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDpointsObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.New_32sceneCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("points"), gdjs.New_32sceneCode.GDpointsObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDpointsObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
/* Reuse gdjs.New_32sceneCode.GDpointsObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setScale(gdjs.New_32sceneCode.GDplayerObjects1[i].getScale() + (0.1));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDpointsObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDpointsObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.3, "", 0);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "f"));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDplayerObjects1.length = 0;
gdjs.New_32sceneCode.GDplayerObjects2.length = 0;
gdjs.New_32sceneCode.GDplayerObjects3.length = 0;
gdjs.New_32sceneCode.GDenemyObjects1.length = 0;
gdjs.New_32sceneCode.GDenemyObjects2.length = 0;
gdjs.New_32sceneCode.GDenemyObjects3.length = 0;
gdjs.New_32sceneCode.GDplayernameObjects1.length = 0;
gdjs.New_32sceneCode.GDplayernameObjects2.length = 0;
gdjs.New_32sceneCode.GDplayernameObjects3.length = 0;
gdjs.New_32sceneCode.GDsandObjects1.length = 0;
gdjs.New_32sceneCode.GDsandObjects2.length = 0;
gdjs.New_32sceneCode.GDsandObjects3.length = 0;
gdjs.New_32sceneCode.GDgrassObjects1.length = 0;
gdjs.New_32sceneCode.GDgrassObjects2.length = 0;
gdjs.New_32sceneCode.GDgrassObjects3.length = 0;
gdjs.New_32sceneCode.GDexitObjects1.length = 0;
gdjs.New_32sceneCode.GDexitObjects2.length = 0;
gdjs.New_32sceneCode.GDexitObjects3.length = 0;
gdjs.New_32sceneCode.GDpointsObjects1.length = 0;
gdjs.New_32sceneCode.GDpointsObjects2.length = 0;
gdjs.New_32sceneCode.GDpointsObjects3.length = 0;

gdjs.New_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
