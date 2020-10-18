const aCar = {
  owner: "Joe Bloggs",
  address : '3 Walkers Lane',
  previous_owners: [
    {name: 'Pat Smith',address:'1 Main Street'},
    {name: 'Sheila Dwyer',address:'2 High Street'}
  ],
  type: {
    make: 'Toyota',
    model: 'Corolla',
    cc: '1.8'
  },
  features : ['Parking assist', 'Alarm', 'Tow-bar'],
  registration: {
    year: '201',
    countyCode: 'WD',
    number: '1058'
  }
};
console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log('Reg.=' + aCar.registration['year'] + '-' + aCar.registration['countyCode'] + '-' + aCar.registration['number']);

aCar.mileage = 10000;
aCar.color = {
  exteriorColor:'red',
  interiorFabric: {
    texture: 'leather',
    shade:'cream'
  }
}

console.log('It is a ' + aCar.color.exteriorColor + ' car, ' + aCar.mileage + ' mileage, with '+ aCar.color.interiorFabric.texture + ' interior..');
console.log('First owner : ' + aCar.previous_owners[0].name + ' - ' + aCar.previous_owners[0].address )

for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
} 

for (let p in aCar.type)  {
  console.log(p.toUpperCase() + ' = ' + aCar.type[p]) ;
}

for (let owner in aCar.previous_owners) {
  console.log('Name of previous owner: ' + aCar.previous_owners[owner].name);
}