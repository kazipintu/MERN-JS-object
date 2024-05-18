/*  ~ OBJECT declaration ~  */

//object data_type is "non=-primitive" data type
// array in third bracket [], object always in second/curly bracket {}

// objects always in pairs with {property -> value} combination or
// objects always in pairs with {key -> value} combination
// this is called key->value pair


{
  const student2 = { class: 10, section: 'D', roll: 53, mathMarks: 48, fitBody: false, behaveGood: 'true', phone: undefined }

  const laptop2 = { brand: 'framework', nanoCircuit: undefined, color: 'aluminium', price: 1200, availableIndia: undefined }

  console.log(student2);
  console.log(laptop2);
}


{
  const laptop = { brand: 'framework', nanoCircuit: undefined, body: 'aluminium', color: 'silver', price: 1200, availableIndia: undefined }

  console.log(laptop.color);
  console.log(laptop);
  laptop.price = 900;
  console.log(laptop);

  laptop.price = '$900';
  console.log(laptop);
  laptop['price'] = '$600'
  console.log(laptop);
  const priceKey = 'price'
  laptop[priceKey] = '$1000'
  console.log(laptop);
}


{
  const student = { class: 10, section: 'D', roll: 53, mathMarks: 48, fitBody: false, behaveGood: 'true', address: undefined }

  const newObjectPhone = 'phone'
  student.phone = 987654321
  student['phone'] = 987654321
  console.log(student);
  delete student.behaveGood;
  console.log(student);
}