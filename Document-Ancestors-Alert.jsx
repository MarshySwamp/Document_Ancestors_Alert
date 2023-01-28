// Doc contains photoshop:DocumentAncestors metadata - true or false!

var xmpMeta = activeDocument.xmpMetadata.rawData;
alert(ancestorsMeta(xmpMeta) + "\r" + "photoshop:DocumentAncestors");

function ancestorsMeta(str) {
   var regEx = new RegExp("\<photoshop:DocumentAncestors\>", "gim");
   var results = str.match(regEx);
   if (results) return true;
   else return false;
}
