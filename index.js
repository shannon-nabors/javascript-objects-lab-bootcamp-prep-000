var recipes = {
  'garlic': '1 clove',
  'onion': '1',
  'red bell pepper': '1',
  'ground beef': '1 lb.',
  'chili seasoning': '1 packet',
  'black beans': '1 can',
  'kidney beans': '2 cans',
  'diced tomatoes': '1 can'
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return(Object.assign({}, obj, { [key]: value }));
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  
}