function timeout() {

  // This disables, changes the background color, and replaces the text of the button for 0.7 seconds
  document.getElementById('button1').value = 'Generating...';
  document.getElementById('button1').disabled = true;
  document.getElementById("button1").style.backgroundColor='red';
  setTimeout(generate, 700);

}

function generate() {

  document.getElementById('button1').value = 'Generate Class';
  document.getElementById('button1').disabled = false;
  document.getElementById("button1").style.backgroundColor='white';

  // Here we are resetting each variable to nothing
  var output1 = "";
  var output2 = "";
  var output3 = "";
  var output4 = "";
  var output5 = "";

  var secondOutput1 = "";
  var secondOutput2 = "";
  var secondOutput3 = "";
  var secondOutput4 = "";
  var secondOutput5 = "";

  var m4Final1 = "";
  var m4Final2 = "";
  var m4Final3 = "";
  var m4Final4 = "";
  var m4Final5 = "";
  var m4Final6 = "";
  var m4Final7 = "";
  var m4Final8 = "";
  var m4Final9 = "";

  var j358Final1 = "";
  var j358Final2 = "";
  var j358Final3 = "";
  var j358Final4 = "";
  var j358Final5 = "";
  var j358Final6 = "";
  var j358Final7 = "";
  var j358Final8 = "";
  var j358Final9 = "";

  // Here we are linking are html headers via their ID
  document.getElementById('primary1').innerHTML = '';
  document.getElementById('primary2').innerHTML = '';
  document.getElementById('primary3').innerHTML = '';
  document.getElementById('primary4').innerHTML = '';
  document.getElementById('primary5').innerHTML = '';
  document.getElementById('primary6').innerHTML = '';
  document.getElementById('primary7').innerHTML = '';
  document.getElementById('primary8').innerHTML = '';
  document.getElementById('primary9').innerHTML = '';

  document.getElementById('secondary1').innerHTML = '';
  document.getElementById('secondary2').innerHTML = '';
  document.getElementById('secondary3').innerHTML = '';
  document.getElementById('secondary4').innerHTML = '';
  document.getElementById('secondary5').innerHTML = '';
  document.getElementById('secondary6').innerHTML = '';
  document.getElementById('secondary7').innerHTML = '';
  document.getElementById('secondary8').innerHTML = '';
  document.getElementById('secondary9').innerHTML = '';

  // Here I am delcaring all the arrays for each gun attachment

  // All Optics are the same
  var generalOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - OWC 4.4X Tactical Scope',
    'OPTIC - RTC 4.4X Tactical Scope'
  ];

  //ASSAULT
  ///////////////////////
  //M4 Attachments//
  ///////////////////////
  var m4Muzzle = [
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Light Muzzle Brake'
  ];

  var m4Barrel = [
    'BARREL - OWC Ranger',
    'BARREL - MIP Light',
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Marksman',
    'BARREL - YKM Integral Suppressor Light'
  ];

  var m4Stock = [
    'STOCK - No Stock',
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - MIP Strike Stock'
  ];

  var m4Perk = [
    'PERK - FMJ',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master'
  ];

  var m4Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var m4Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var m4Ammunition = [
    'AMMUNITION - 40 Round Extended Mag',
    'AMMUNITION - 50 Round Extended Mag'
  ];

  var m4RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Type 25 Attachments//
  ///////////////////////
  var type25Muzzle = [
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Light Muzzle Brake'
  ];

  var type25Barrel = [
    'BARREL - MIP Light',
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - MIP Extended Light Barrel'
  ];

  var type25Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock'
  ];

  var type25Perk = [
    'PERK - FMJ',
    'PERK - Sleight of Hand',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var type25Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var type25Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var type25Ammunition = [
    'AMMUNITION - 38 Round Extended Mag',
    'AMMUNITION - Fast Reload',
    'AMMUNITION - 46 Round Extended Mag',
    'AMMUNITION - 42 Round Fast Reload',
    'AMMUNITION - Stopping Power Reload'
  ];

  var type25RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //M16 Attachments//
  ///////////////////////
  var m16Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var m16Barrel = [
    'BARREL - YKM Integral Suppressor Light',
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Marksman'
  ];

  var m16Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var m16Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var m16Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var m16Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var m16Ammunition = [
    'AMMUNITION - 39 Round Extended Mag',
    'AMMUNITION - 48 Round Extended Mag'
  ];

  var m16RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //AK117 Attachments//
  ///////////////////////
  var ak117Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - MIP Light Muzzle Brake',
    'MUZZLE - Monolithic Suppressor'
  ];

  var ak117Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman',
    'BARREL - YKM Integral Suppressor'
  ];

  var ak117Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock'
  ];

  var ak117Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var ak117Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var ak117Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Tactical Foregrip B'
  ];

  var ak117Ammunition = [
    'AMMUNITION - 40 Round Extended Mag',
    'AMMUNITION - 48 Round Extended Mag'
  ];

  var ak117RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //AK-47 Attachments//
  ///////////////////////
  var ak47Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var ak47Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman',
    'BARREL - MIP Extended Light Barrel'
  ];

  var ak47Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock'
  ];

  var ak47Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var ak47Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var ak47Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var ak47Ammunition = [
    'AMMUNITION - 5.45 Caliber Ammo',
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Large Extended Mag B'
  ];

  var ak47RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //ASM10 Attachments//
  ///////////////////////
  var asm10Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var asm10Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var asm10Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var asm10Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var asm10Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var asm10Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var asm10Ammunition = [
    'AMMUNITION - 33 Round Extended Mag',
    'AMMUNITION - 40 Round Extended Mag'
  ];

  var asm10RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //BK57 Attachments//
  ///////////////////////
  var bk57Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - MIP Light Muzzle Brake',
    'MUZZLE - Monolithic Suppressor'
  ];

  var bk57Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Ranger',
    'BARREL - MIP Extended Light Barrel'
  ];

  var bk57Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - YKM Combat Stock'
  ];

  var bk57Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var bk57Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var bk57Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Elite Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var bk57Ammunition = [
    'AMMUNITION - 40 Round Fast Reload',
    'AMMUNITION - 50 Round Extended Mag',
    'AMMUNITION - Large Caliber Ammo'
  ];

  var bk57RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //LK24 Attachments//
  ///////////////////////
  var lk24Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var lk24Barrel = [
    'BARREL - YKM Integral Suppressor Light',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var lk24Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var lk24Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var lk24Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var lk24Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var lk24Ammunition = [
    'AMMUNITION - 40 Round Extended Mag',
    'AMMUNITION - 50 Round Extended Mag'
  ];

  var lk24RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //ICR-1 Attachments//
  ///////////////////////
  var icr1Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Breacher Device',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var icr1Barrel = [
    'BARREL - YKM Integral Suppressor Light',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var icr1Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var icr1Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var icr1Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var icr1Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var icr1Ammunition = [
    'AMMUNITION - 40 Round Extended Mag',
    'AMMUNITION - 40 Round Fast Reload',
    'AMMUNITION - 50 Round Fast Reload'
  ];

  var icr1RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Man-O-War Attachments//
  ///////////////////////
  var manOWarMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Huge Suppressor',
    'MUZZLE - Monolithic Suppressor'
  ];

  var manOWarBarrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var manOWarStock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock'
  ];

  var manOWarPerk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var manOWarLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var manOWarUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var manOWarAmmunition = [
    'AMMUNITION - 30 Round Extended Mag',
    'AMMUNITION - 35 Round Extended Mag'
  ];

  var manOWarRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //KN-44 Attachments//
  ///////////////////////
  var kn44Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - MIP Light Muzzle Brake'
  ];

  var kn44Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var kn44Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var kn44Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var kn44Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var kn44Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var kn44Ammunition = [
    'AMMUNITION - 44 Round Extended Mag',
    'AMMUNITION - 38 Round Fast Reload'
  ];

  var kn44RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //HBRa3 Attachments//
  ///////////////////////
  var hbra3Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - MIP Light Muzzle Brake',
    'MUZZLE - Monolithic Suppressor'
  ];

  var hbra3Barrel = [
    'BARREL - MIP Light',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var hbra3Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock'
  ];

  var hbra3Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var hbra3Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var hbra3Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var hbra3Ammunition = [
    'AMMUNITION - 44 Round Extended Mag',
    'AMMUNITION - Fast Extended Mag'
  ];

  var hbra3RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //HVK-30 Attachments//
  ///////////////////////
  var hvk30Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var hvk30Barrel = [
    'BARREL - MIP Light',
    'BARREL - YKM Integral Suppressor Heavy',
    'BARREL - OWC Marksman'
  ];

  var hvk30Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock'
  ];

  var hvk30Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var hvk30Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var hvk30Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var hvk30Ammunition = [
    'AMMUNITION - Fast Reload',
    'AMMUNITION - Large Caliber Ammo',
    'AMMUNITION - 44 Round Extended Mag'
  ];

  var hvk30RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //DR-H Attachments//
  ///////////////////////
  var drhMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - MIP Light Muzzle Brake'
  ];

  var drhBarrel = [
    'BARREL - MIP Light',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var drhStock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var drhPerk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var drhLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var drhUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var drhAmmunition = [
    'AMMUNITION - 30 Round Extended Mag',
    'AMMUNITION - 30 Round OTM Mag',
    'AMMUNITION - 38 Round Extended Mag',
    'AMMUNITION - 25 Round OTM Mag'
  ];

  var drhRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Peacekeeper MK2 Attachments//
  ///////////////////////
  var peacekeepermk2Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Agency Suppressor',
    'MUZZLE - Infantry Compensator',
    'MUZZLE - MIP Flashguard',
    'MUZZLE - OWC Eliminator',
    'MUZZLE - RTC Muzzle Brake'
  ];

  var peacekeepermk2Barrel = [
    'BARREL - Rapid Fire Barrel',
    'BARREL - Well-Forged Barrel',
    'BARREL - Taskforce Barrel',
    'BARREL - Long-Range Barrel',
    'BARREL - Built-In Silence Barrel'
  ];

  var peacekeepermk2Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - OWC 4.4X Tactical Scope',
    'OPTIC - RTC 4.4X Tactical Scope'
  ];

  var peacekeepermk2Stock = [
    'STOCK - Light Weight Stock',
    'STOCK - Marathon Stock',
    'STOCK - Agile Stock',
    'STOCK - No Stock'
  ];

  var peacekeepermk2Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var peacekeepermk2Laser = [
    'LASER - 1mW Steady Aim Laser',
    'LASER - 5mW Combat Laser',
    'LASER - Aim Assist Laser'
  ];

  var peacekeepermk2Underbarrel = [
    'UNDERBARREL - RTC Speed Foregrip',
    'UNDERBARREL - Infiltrator Foregrip',
    'UNDERBARREL - Foregrip',
    'UNDERBARREL - Patrol Foregrip',
    'UNDERBARREL - Field Agent Foregrip'
  ];

  var peacekeepermk2Ammunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Double Stack Mag'
  ];

  var peacekeepermk2RearGrip = [
    'REAR GRIP - Rustle Grip Tape',
    'REAR GRIP - Sturdy Grip Tape',
    'REAR GRIP - Firm Grip Tape'
  ];

  ///////////////////////
  //FR .556 Attachments//
  ///////////////////////
  var fr556Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var fr556Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Ranger',
    'BARREL - MIP Extended Light Barrel'
  ];

  var fr556Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - RTC Steady Stock'
  ];

  var fr556Perk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var fr556Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var fr556Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var fr556Ammunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Fast Reload'
  ];

  var fr556RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //AS VAL Attachments//
  ///////////////////////
  var asvalBarrel = [
    'BARREL - MIP 105mm Melee Barrel',
    'BARREL - MIP Quick Response Barrel',
    'BARREL - MIP 200mm Mid-Range Barrel'
  ];

  var asvalStock = [
    'STOCK - OWC Skeleton Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Ranger Stock',
    'STOCK - YKM Combat Stock',
  ];

  var asvalPerk = [
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var asvalLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var asvalUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Piranha Foregrip'
  ];

  var asvalAmmunition = [
    'AMMUNITION - Large Extended Mag B',
    'AMMUNITION - 10 Round FMJ',
    'AMMUNITION - Fast Reload'
  ];

  var asvalRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //CR-56 AMAX Attachments//
  ///////////////////////
  var cr56amaxMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var cr56amaxBarrel = [
    'BARREL - Gunner Stock',
    'BARREL - Intruder Stock',
    'BARREL - MIP Custom Long'
  ];

  var cr56amaxStock = [
    'STOCK - No Stock',
    'STOCK - Psilos Light Stock',
    'STOCK - Custom Strike',
    'STOCK - MIP Gatekeeper',
    'STOCK - MIP Tracker Stock',
    'STOCK - YKM Combat Stock'
  ];

  var cr56amaxPerk = [
    'PERK - FMJ',
    'PERK - Tough',
    'PERK - Long Shot',
    'PERK - Melee Master',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var cr56amaxLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var cr56amaxUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var cr56amaxAmmunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - M67 Ammo'
  ];

  var cr56amaxRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  //SNIPER
  ///////////////////////
  //XPR-50 Attachments//
  ///////////////////////
  var xpr50Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Compensator'
  ];

  var xpr50Barrel = [
    'BARREL - RTC Lightweight',
    'BARREL - RTC CQB',
    'BARREL - RTC Long'
  ];

  var xpr50Optic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var xpr50Stock = [
    'STOCK - MIP Strike Stock',
    'STOCK - No Stock',
    'STOCK - YKM Ghost Stock'
  ];

  var xpr50Perk = [
    'PERK - FMJ',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var xpr50Laser = 'LASER - OWC Laser - Tactical';

  var xpr50Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Merc Foregrip'
  ];

  var xpr50Ammunition = [
    'AMMUNITION - 13 Round Reload',
    'AMMUNITION - 18 Round Reload',
    'AMMUNITION - OWC Stopping Power Reload'
  ];

  ///////////////////////
  //Arctic .50 Attachments//
  ///////////////////////
  var arctic50Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Compensator'
  ];

  var arctic50Barrel = [
    'BARREL - Assassin Short',
    'BARREL - 0.5 Light Long',
    'BARREL - Anti-Material Heavy',
    'BARREL - OWC Monolithic Suppressor'
  ];

  var arctic50Optic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var arctic50Stock = [
    'STOCK - OWC Skeleton Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Light Stock'
  ];

  var arctic50Perk = [
    'PERK - FMJ',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var arctic50Underbarrel = 'UNDERBARREL - Bipod';

  var arctic50Ammunition = [
    'AMMUNITION - 10 Round Reload',
    'AMMUNITION - 12 Round Reload',
    'AMMUNITION - MIP Stopping Power Reload'
  ];

  var arctic50RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //M21 EBR Attachments//
  ///////////////////////
  var m21ebrMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Compensator'
  ];

  var m21ebrBarrel = [
    'BARREL - MIP Precise',
    'BARREL - MIP Steady',
    'BARREL - MIP Extended Light Barrel'
  ];

  var m21ebrOptic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var m21ebrStock = [
    'STOCK - YKM Light Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock',
    'STOCK - MIP Strike Stock',
  ];

  var m21ebrPerk = [
    'PERK - FMJ',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var m21ebrLaser = 'LASER - OWC Laser - Tactical';

  var m21ebrUnderbarrel = [
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var m21ebrAmmunition = [
    'AMMUNITION - 15 Round Reload',
    'AMMUNITION - 20 Round Reload'
  ];

  ///////////////////////
  //DL Q33 Attachments//
  ///////////////////////
  var dlq33Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Compensator'
  ];

  var dlq33Barrel = [
    'BARREL - .408 Standard',
    'BARREL - Free Floating',
    'BARREL - MIP Light'
  ];

  var dlq33Optic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var dlq33Stock = [
    'STOCK - OWC Skeleton Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - OWC Ranger Stock',
    'STOCK - YKM Combat Stock'
  ];

  var dlq33Perk = [
    'PERK - FMJ',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var dlq33Laser = 'LASER - OWC Laser - Tactical';

  var dlq33Underbarrel = 'UNDERBARREL - Bipod';

  var dlq33Ammunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Large Extended Mag B'
  ];

  ///////////////////////
  //Locus Attachments//
  ///////////////////////
  var locusMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Compensator'
  ];

  var locusBarrel = [
    'BARREL - YKM Lightweight Short',
    'BARREL - YKM Lightweight Long',
    'BARREL - YKM Standard'
  ];

  var locusOptic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var locusStock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Skeleton Stock'
  ];

  var locusPerk = [
    'PERK - FMJ',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var locusLaser = 'LASER - OWC Laser - Tactical';

  var locusAmmunition = [
    'AMMUNITION - 10 Round Reload',
    'AMMUNITION - 12 Round Reload',
    'AMMUNITION - OWC Stopping Power Reload'
  ];

  var locusRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Outlaw Attachments//
  ///////////////////////
  var outlawMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Compensator'
  ];

  var outlawBarrel = [
    'BARREL - MIP Tac Long',
    'BARREL - MIP Memorial Cowboy',
    'BARREL - MIP Steady'
  ];

  var outlawOptic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var outlawStock = [
    'STOCK - YKM Light Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - MIP Stalker Stock'
  ];

  var outlawPerk = [
    'PERK - FMJ',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var outlawLaser = 'LASER - OWC Laser - Tactical';

  var outlawUnderbarrel = 'UNDERBARREL - Bipod';

  var outlawAmmunition = [
    'AMMUNITION - 9 Round Reload',
    'AMMUNITION - 12 Round Reload'
  ];

  var outlawRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //NA-45 Attachments//
  ///////////////////////
  var na45Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - OWC Light Compensator'
  ];

  var na45Barrel = [
    'BARREL - MIP Custom Light',
    'BARREL - RTC Modified',
    'BARREL - OWC Tac Long'
  ];

  var na45Optic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope A',
    'OPTIC - 3X Tactical Scope B',
    'OPTIC - 3X Tactical Scope C',
    'OPTIC - 6X Tactical Scope B',
    'OPTIC - 6X Tactical Scope C'
  ];

  var na45Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Skeleton Stock'
  ];

  var na45Perk = [
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Full Ammo'
  ];

  var na45Laser = 'LASER - OWC Laser - Tactical';

  var na45Underbarrel = [
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Heavy Duty Trigger',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Light Trigger',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var na45Ammunition = [
    'AMMUNITION - Fragment Ammo',
    'AMMUNITION - High Explosive Ammo',
    'AMMUNITION - Electromagnetic Ammo'
  ];

  //LMG
  ///////////////////////
  //S36 Attachments//
  ///////////////////////
  var s36Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - YKM Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var s36Barrel = [
    'BARREL - Compagnie Generale Sevier - Light Barrel',
    'BARREL - Compagnie Generale Sevier - Short Barrel',
    'BARREL - MIP Extended Light Barrel'
  ];

  var s36Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock'
  ];

  var s36Perk = [
    'PERK - FMJ',
    'PERK - Stealth Kill',
    'PERK - Empty Reload',
    'PERK - Headshot XP',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var s36Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var s36Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var s36Ammunition = [
    'AMMUNITION - 75 Round Belt',
    'AMMUNITION - 100 Round Belt'
  ];

  var s36RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //UL736 Attachments//
  ///////////////////////
  var ul736Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - YKM Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var ul736Barrel = [
    'BARREL - RTC 12.4" Light Barrel',
    'BARREL - RTC 18.2" Short',
    'BARREL - RTC 25.4" Extended Barrel'
  ];

  var ul736Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock'
  ];

  var ul736Perk = [
    'PERK - FMJ',
    'PERK - Stealth Kill',
    'PERK - Empty Reload',
    'PERK - Headshot XP',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var ul736Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var ul736Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var ul736Ammunition = [
    'AMMUNITION - 50 Round Reload',
    'AMMUNITION - 60 Round Reload'
  ];

  var ul736RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //RPD Attachments//
  ///////////////////////
  var rpdMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Monolithic Suppressor'
  ];

  var rpdBarrel = [
    'BARREL - OWC Heavy Barrel',
    'BARREL - OWC Compact Barrel',
    'BARREL - OWC Extended Barrel'
  ];

  var rpdStock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var rpdPerk = [
    'PERK - FMJ',
    'PERK - Stealth Kill',
    'PERK - Empty Reload',
    'PERK - Headshot XP',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var rpdLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var rpdUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Snatch Foregrip'
  ];

  var rpdAmmunition = [
    'AMMUNITION - 150 Round Belt',
    'AMMUNITION - 200 Round Belt'
  ];

  var rpdRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //M4LMG Attachments//
  ///////////////////////
  var m4lmgMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - YKM Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var m4lmgBarrel = [
    'BARREL - MIP Ultralight Barrel',
    'BARREL - MIP Short Barrel'
  ];

  var m4lmgStock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var m4lmgPerk = [
    'PERK - FMJ',
    'PERK - Stealth Kill',
    'PERK - Empty Reload',
    'PERK - Headshot XP',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var m4lmgLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var m4lmgUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var m4lmgAmmunition = [
    'AMMUNITION - 30 Round Light Reload',
    'AMMUNITION - 40 Round Light Reload'
  ];

  var m4lmgRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Chopper Attachments//
  ///////////////////////
  var chopperMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - YKM Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var chopperBarrel = [
    'BARREL - Chopper Infantry',
    'BARREL - Chopper Special Forces',
    'BARREL - Chopper Heavy'
  ];

  var chopperStock = [
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - YKM Light Stock'
  ];

  var chopperPerk = [
    'PERK - FMJ',
    'PERK - Stealth Kill',
    'PERK - Empty Reload',
    'PERK - Headshot XP',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var chopperLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - YKM Laser - Ranger',
    'LASER - RTC Laser - Merc',
    'LASER - OWC Laser - Tactical'
  ];

  var chopperUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Heavy Handle'
  ];

  var chopperAmmunition = [
    'AMMUNITION - 120 Round Reload',
    'AMMUNITION - 150 Round Reload'
  ];

  var chopperRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Holger 26 Attachments//
  ///////////////////////
  var holger26Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var holger26Barrel = [
    'BARREL - MIP Light',
    'BARREL - MIP Light Barrel (Short)'
  ];

  var holger26Stock = [
    'STOCK - RTC Steady Stock',
    'STOCK - No Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - YKM Light Stock'
  ];

  var holger26Perk = [
    'PERK - FMJ',
    'PERK - Stealth Kill',
    'PERK - Empty Reload',
    'PERK - Long Shot',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var holger26Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var holger26Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var holger26Ammunition = [
    'AMMUNITION - Holger-26C Lightweight Polymer Mag',
    'AMMUNITION - Holger-26K Double-Stack Carbine Mag'
  ];

  var holger26RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  //SMG
  ///////////////////////
  //RUS-79U Attachments//
  ///////////////////////
  var rus79uMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var rus79uBarrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - YKM Integral Suppressor Light',
    'BARREL - OWC Marksman'
  ];

  var rus79uOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var rus79uStock = [
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock'
  ];

  var rus79uPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var rus79uLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var rus79uUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var rus79uAmmunition = [
    'AMMUNITION - 38 Round Extended Mag',
    'AMMUNITION - 50 Round Extended Mag',
    'AMMUNITION - 38 Round Fast Reload'
  ];

  var rus79uRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Chicom Attachments//
  ///////////////////////
  var chicomMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var chicomBarrel = [
    'BARREL - MIP Light',
    'BARREL - OWC Marksman',
    'BARREL - YKM Integral Suppressor Light'
  ];

  var chicomOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var chicomStock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - MIP Strike Stock'
  ];

  var chicomPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var chicomLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var chicomUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var chicomAmmunition = [
    'AMMUNITION - 39 Round Extended Mag',
    'AMMUNITION - 45 Round Extended Mag'
  ];

  var chicomRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //PDW-57 Attachments//
  ///////////////////////
  var pdw57Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var pdw57Barrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman'
  ];

  var pdw57Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var pdw57Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - MIP Strike Stock'
  ];

  var pdw57Perk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var pdw57Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var pdw57Underbarrel = [
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - OWC Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var pdw57RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Razorback Attachments//
  ///////////////////////
  var razorbackMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var razorbackBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman'
  ];

  var razorbackOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var razorbackStock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - MIP Strike Stock'
  ];

  var razorbackPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Rapid Fire',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var razorbackLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var razorbackUnderbarrel = [
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - OWC Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip'
  ];

  var razorbackAmmunition = 'AMMUNITION - Extended Mag A';

  var razorbackRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //MSMC Attachments//
  ///////////////////////
  var msmcMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var msmcBarrel = [
    'BARREL - MIP Light',
    'BARREL - OWC Ranger',
    'BARREL - OWC Marksman'
  ];

  var msmcOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var msmcStock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - No Stock'
  ];

  var msmcPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var msmcLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var msmcUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var msmcAmmunition = [
    'AMMUNITION - 36 Round Extended Mag',
    'AMMUNITION - Fast Reload',
    'AMMUNITION - 30 Round Fast Reload'
  ];

  var msmcRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //HG 40 Attachments//
  ///////////////////////
  var hg40Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var hg40Barrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - YKM Integral Suppressor',
    'BARREL - OWC Marksman'
  ];

  var hg40Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var hg40Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock'
  ];

  var hg40Perk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var hg40Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var hg40Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var hg40Ammunition = [
    'AMMUNITION - 40 Round Extended Mag',
    'AMMUNITION - 40 Round Fast Reload',
    'AMMUNITION - 45 Round Fast Reload'
  ];

  var hg40RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Pharo Attachments//
  ///////////////////////
  var pharoMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var pharoBarrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - MIP Light',
    'BARREL - OWC Marksman'
  ];

  var pharoOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var pharoStock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock'
  ];

  var pharoPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var pharoLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var pharoUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var pharoAmmunition = [
    'AMMUNITION - Fast Reload',
    'AMMUNITION - 44 Round Extended Mag',
    'AMMUNITION - 36 Round Fast Reload'
  ];

  var pharoRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //GKS Attachments//
  ///////////////////////
  var gksMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var gksBarrel = [
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - YKM Integral Suppressor',
    'BARREL - OWC Marksman'
  ];

  var gksOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var gksStock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock'
  ];

  var gksPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var gksLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var gksUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var gksAmmunition = [
    'AMMUNITION - 40 Round Extended Mag',
    'AMMUNITION - 45 Round Extended Mag',
    'AMMUNITION - 32 Round Fast Reload'
  ];

  var gksRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Cordite Attachments//
  ///////////////////////
  var corditeMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var corditeBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman'
  ];

  var corditeOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var corditeStock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock'
  ];

  var corditePerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var corditeLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var corditeUnderbarrel = [
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - OWC Foregrip'
  ];

  var corditeAmmunition = [
    'AMMUNITION - 48 Round Extended Mag',
    'AMMUNITION - 56 Round Extended Mag'
  ];

  var corditeRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //QQ9 Attachments//
  ///////////////////////
  var qq9Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var qq9Barrel = [
    'BARREL - MIP Customized Light Barrel',
    'BARREL - RTC Recon Tac Long',
    'BARREL - MIP Tactical Barrel',
    'BARREL - Monolithic Integral Suppressor'
  ];

  var qq9Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var qq9Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var qq9Perk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var qq9Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var qq9Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var qq9Ammunition = [
    'AMMUNITION - 45 Round Extended Mag',
    'AMMUNITION - Fast Reload',
    'AMMUNITION - 10mm 30 Round Reload'
  ];

  var qq9RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Fennec Attachments//
  ///////////////////////
  var fennecMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var fennecBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - MIP Light',
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - YKM Integral Suppressor Light'
  ];

  var fennecOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var fennecStock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var fennecPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Akimbo',
    'PERK - Wounding'
  ];

  var fennecLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical',
    'LASER - YKM Laser - Ranger',
    'LASER - RTC Laser - Merc'
  ];

  var fennecUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var fennecAmmunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Fast Reload',
    'AMMUNITION - Light Mag'
  ];

  var fennecRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //agr556 Attachments//
  ///////////////////////
  var agr556Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var agr556Barrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - MIP Light',
    'BARREL - OWC Marksman'
  ];

  var agr556Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var agr556Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - YKM Combat Stock'
  ];

  var agr556Perk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var agr556Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var agr556Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var agr556Ammunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - 30 Round 5.56mm Mag',
    'AMMUNITION - 60 Round 5.56mm Reload'
  ];

  var agr556RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //QXR Attachments//
  ///////////////////////
  var qxrMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var qxrBarrel = [
    'BARREL - MIP Light',
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Marksman'
  ];

  var qxrOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var qxrStock = [
    'STOCK - YKM Light Stock',
    'STOCK - MIP Strike Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var qxrPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Enhanced Bolt',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var qxrLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var qxrUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var qxrAmmunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Fast Reload'
  ];

  var qxrRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //PP19 Bizon Attachments//
  ///////////////////////
  var bizonMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var bizonBarrel = [
    'BARREL - RTC Sawed-Off',
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman'
  ];

  var bizonOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var bizonStock = [
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Skeleton Stock',
    'STOCK - No Stock'
  ];

  var bizonPerk = [
    'PERK - FMJ',
    'PERK - Wild Hipfire',
    'PERK - Double Kill',
    'PERK - Fast Reload Kill',
    'PERK - Sleight of Hand',
    'PERK - Full Ammo',
    'PERK - Disable',
    'PERK - Wounding'
  ];

  var bizonLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var bizonAmmunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Large Caliber Ammo A'
  ];

  var bizonRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  //SHOTGUN
  ///////////////////////
  //HS2126 Attachments//
  ///////////////////////
  var hs2126Muzzle = [
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Flash Guard',
    'MUZZLE - Choke',
    'MUZZLE - Monolithic Suppressor'
  ];

  var hs2126Barrel = [
    'BARREL - YKM Light Barrel (Long)',
    'BARREL - YKM Light Barrel (Short)',
    'BARREL - YKM Heavy Barrel'
  ];

  var hs2126Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var hs2126Stock = [
    'STOCK - MIP Stalker Stock',
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock'
  ];

  var hs2126Perk = [
    'PERK - Sleight of Hand',
    'PERK - Speed Up Kill',
    'PERK - Slide Flak Jacket',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var hs2126Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var hs2126Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip'
  ];

  var hs2126Ammunition = [
    'AMMUNITION - 20 Round Extended Reload Case',
    'AMMUNITION - 28 Round Extended Reload Case',
    'AMMUNITION - FF Birdshot'
  ];

  var hs2126RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //BY15 Attachments//
  ///////////////////////
  var by15Muzzle = [
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - Choke',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Marauder Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - Flash Guard'
  ];

  var by15Barrel = [
    'BARREL - RTC Extended Light Barrel',
    'BARREL - Sawed-Off Barrel (-2)',
    'BARREL - Extended Barrel (+2)'
  ];

  var by15Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var by15Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Ranger Stock',
    'STOCK - No Stock'
  ];

  var by15Perk = [
    'PERK - Sleight of Hand',
    'PERK - Speed Up Kill',
    'PERK - Slide Flak Jacket',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var by15Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var by15Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Tactical Guard',
    'UNDERBARREL - Steady Guard'
  ];

  var by15Ammunition = [
    'AMMUNITION - Long Ammo Tube(+2)',
    'AMMUNITION - 500gr Slug'
  ];

  var by15RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //HSO405 Attachments//
  ///////////////////////
  var hso405Muzzle = [
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Flash Guard',
    'MUZZLE - Choke',
    'MUZZLE - Monolithic Suppressor'
  ];

  var hso405Barrel = [
    'BARREL - RTC Extended Light Barrel',
    'BARREL - Sawed-Off Barrel(-2)'
  ];

  var hso405Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var hso405Stock = [
    'STOCK - YKM Light Stock',
    'STOCK - No Stock'
  ];

  var hso405Perk = [
    'PERK - Sleight of Hand',
    'PERK - Speed Up Kill',
    'PERK - Slide Flak Jacket',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var hso405Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var hso405Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip'
  ];

  var hso405Ammunition = [
    'AMMUNITION - Long Ammo Tube (+2)',
    'AMMUNITION - 500gr Slug'
  ];

  var hso405RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Striker Attachments//
  ///////////////////////
  var strikerMuzzle = [
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Flash Guard',
    'MUZZLE - Choke',
    'MUZZLE - Monolithic Suppressor'
  ];

  var strikerBarrel = [
    'BARREL - Light Barrel (Long)',
    'BARREL - Light Barrel (Short)',
    'BARREL - OWC Customized Heavy Barrel'
  ];

  var strikerOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var strikerStock = [
    'STOCK - MIP Stalker Stock',
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock'
  ];

  var strikerPerk = [
    'PERK - Sleight of Hand',
    'PERK - Speed Up Kill',
    'PERK - Slide Flak Jacket',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var strikerLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var strikerUnderbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip'
  ];

  var strikerAmmunition = [
    'AMMUNITION - 16 Round Extended Reload Case',
    'AMMUNITION - Fast Reload Reload Case',
    'AMMUNITION - 500gr Slug'
  ];

  var strikerRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //KRM 262 Attachments//
  ///////////////////////
  var krm262Muzzle = [
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Flash Guard',
    'MUZZLE - Choke',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - Marauder Suppressor'
  ];

  var krm262Barrel = [
    'BARREL - RTC Light Extended Barrel',
    'BARREL - Sawed-Off Barrel (-2)',
    'BARREL - Extended Barrel (+2)'
  ];

  var krm262Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var krm262Stock = [
    'STOCK - MIP Stalker Stock',
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - No Stock'

  ];

  var krm262Perk = [
    'PERK - Sleight of Hand',
    'PERK - Speed Up Kill',
    'PERK - Slide Flak Jacket',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var krm262Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var krm262Underbarrel = [
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Tactical Foregrip A'
  ];

  var krm262Ammunition = [
    'AMMUNITION - Long Ammo Tube (+2)',
    'AMMUNITION - 500gr Slug'
  ];

  var krm262RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Echo Attachments//
  ///////////////////////
  var echoMuzzle = [
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Flash Guard',
    'MUZZLE - Choke',
    'MUZZLE - Monolithic Suppressor'
  ];

  var echoBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - MIP Light Barrel (Short)',
    'BARREL - OWC Marksman'
  ];

  var echoOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3'
  ];

  var echoStock = [
    'STOCK - MIP Stalker Stock',
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - No Stock'
  ];

  var echoPerk = [
    'PERK - Sleight of Hand',
    'PERK - Speed Up Kill',
    'PERK - Slide Flak Jacket',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Disable'
  ];

  var echoLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var echoUnderbarrel = [
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Merc Foregrip'
  ];

  var echoAmmunition = [
    'AMMUNITION - Extended Mag C',
    'AMMUNITION - Extended Mag D',
    'AMMUNITION - Slug Reload'
  ];

  var echoRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  //MARKSMAN
  ///////////////////////
  //Kilo Bolt-Action Attachments//
  ///////////////////////
  var kiloMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - RTC Compensator',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Monolithic Suppressor'
  ];

  var kiloBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman',
    'BARREL - OWC Ranger'
  ];

  var kiloOptic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3',
    'OPTIC - 6X Tactical Scope 2',
    'OPTIC - 6X Tactical Scope 3'
  ];

  var kiloStock = [
    'STOCK - YKM Light Stock',
    'STOCK - YKM Combat Stock',
    'STOCK - RTC Steady Stock'
  ];

  var kiloPerk = [
    'PERK - FMJ',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Disable'
  ];

  var kiloLaser = [
    'LASER - OWC Laser - Tactical'
  ];

  var kiloUnderbarrel = 'UNDERBARREL - Bipod';

  var kiloAmmunition = [
    'AMMUNITION - Fast Reload',
    'AMMUNITION - Thermite Reload',
    'AMMUNITION - OWC Stopping Power Reload'
  ];

  var kiloRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //SKS Attachments//
  ///////////////////////
  var sksMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Monolithic Suppressor'
  ];

  var sksBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Marksman',
    'BARREL - MIP Light'
  ];

  var sksOptic = [
    'OPTIC - Tactical Scope',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3',
    'OPTIC - 6X Tactical Scope 2',
    'OPTIC - 6X Tactical Scope 3'
  ];

  var sksStock = [
    'STOCK - No Stock',
    'STOCK - OWC Ranger Stock',
    'STOCK - RTC Steady Stock'
  ];

  var sksPerk = [
    'PERK - FMJ',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Fast Switch',
    'PERK - Disable'
  ];

  var sksLaser = [
    'LASER - OWC Laser - Tactical'
  ];

  var sksUnderbarrel = [
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip'
  ];
  var sksAmmunition = [
    'AMMUNITION - 30 Round Extended Mag',
    'AMMUNITION - 10 Round Light Reload'
  ];

  var sksRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //SP-R 208 Attachments//
  ///////////////////////
  var spr208Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Compensator'
  ];

  var spr208Barrel = [
    'BARREL - RTC Light Extended Barrel',
    'BARREL - RTC 26 Heavy Long Barrel',
    'BARREL - RTC Light Monolithic Silencer Barrel',
    'BARREL - RTC Light Barrel'
  ];

  var spr208Optic = [
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - OWC 4.4X Tactical Scope',
    'OPTIC - RTC 4.4X Tactical Scope'
  ];

  var spr208Stock = [
    'STOCK - YKM Combat Stock',
    'STOCK - YKM Light Stock',
    'STOCK - RTC Steady Stock',
    'STOCK - OWC Skeleton Stock'
  ];

  var spr208Perk = [
    'PERK - FMJ',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Disable'
  ];

  var spr208Laser = [
    'LASER - OWC Laser - Tactical'
  ];

  var spr208Underbarrel = [
    'UNDERBARREL - Bipod',
    'UNDERBARREL - Strike Foregrip',
    'UNDERBARREL - Merc Foregrip',
    'UNDERBARREL - Tactical Foregrip A',
    'UNDERBARREL - Operator Foregrip',
    'UNDERBARREL - Ranger Foregrip'
  ];
  var spr208Ammunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - .338 5 Round Reload',
    'AMMUNITION - .300 5 Round Reload'
  ];

  var spr208Bolt = [
    'BOLT - Light Bolt',
    'BOLT - Heavy Bolt'
  ];

  ///////////////////////
  //MK2 Attachments//
  ///////////////////////
  var mk2Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - Monolithic Suppressor',
    'MUZZLE - RTC Compensator'
  ];

  var mk2Barrel = [
    'BARREL - 20.0 Forged Barrel',
    'BARREL - OWC Marksman',
    'BARREL - 18.0 Sport Barrel'
  ];

  var mk2Optic = [
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Tactical Scope',
    'OPTIC - 3X Tactical Scope 1',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - 3X Tactical Scope 3',
    'OPTIC - 4X Tactical Scope',
    'OPTIC - OWC 4.4X Tactical Scope',
    'OPTIC - RTC 4.4X Tactical Scope'
  ];

  var mk2Stock = [
    'STOCK - MIP Sport Stock',
    'STOCK - Custom Accuracy Stock',
    'STOCK - Cartridge Sleeve',
    'STOCK - Ultralight Hollow'
  ];

  var mk2Perk = [
    'PERK - FMJ',
    'PERK - Sleight of Hand',
    'PERK - Wounding',
    'PERK - Full Ammo',
    'PERK - Bullet Return',
    'PERK - Headshot Slow',
    'PERK - Disable'
  ];

  var mk2Laser = [
    'LASER - OWC Laser - Tactical'
  ];

  var mk2Ammunition = [
    'AMMUNITION - .30 - 30 Ammo'
  ];

  var mk2RearGrip = [
    'BOLT - Granulated Grip Tape',
    'BOLT - Rubberized Grip Tape',
    'BOLT - Stippled Grip Tape'
  ];

  //Pistol
  ///////////////////////
  //J358 Attachments//
  ///////////////////////
  var j358Muzzle = [
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - OWC Light Compensator'
  ];

  var j358Barrel = [
    'BARREL - J358 Custom Light',
    'BARREL - J358 Long',
    'BARREL - J358 Short'
  ];

  var j358Optic = [
    'OPTIC - Holographic Sight 2',
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 1',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - 3X Tactical Scope 2',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - 4X Tactical Scope'
  ];

  var j358Perk = [
    'PERK - Full Ammo',
    'PERK - FMJ',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Sleight of Hand'
  ];

  var j358Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var j358Underbarrel = [
    'TRIGGER ACTION - Heavy Duty Trigger',
    'TRIGGER ACTION - Match Grade Trigger',
    'TRIGGER ACTION - Lightweight Trigger'
  ];

  var j358Ammunition = [
    'AMMUNITION - 8 Round Reload',
    'AMMUNITION - Stopping Power Reload'
  ];

  var j358RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape',
    'REAR GRIP - Shoulder Stock - Tactical',
    'REAR GRIP - Shoulder Stock - Wood'
  ];

  ///////////////////////
  //MW11 Attachments//
  ///////////////////////
  var mw11Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var mw11Barrel = [
    'BARREL - .45 Tac Long',
    'BARREL - .45 Suppressor Light',
    'BARREL - .45 Compact'
  ];

  var mw11Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Holographic Sight 1'
  ];

  var mw11Perk = [
    'PERK - Full Ammo',
    'PERK - FMJ',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Sleight of Hand'
  ];

  var mw11Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var mw11Underbarrel = [
    'TRIGGER ACTION - Heavy Duty Trigger',
    'TRIGGER ACTION - Match Grade Trigger',
    'TRIGGER ACTION - Lightweight Trigger'
  ];

  var mw11Ammunition = [
    'AMMUNITION - 10 Round Reload',
    'AMMUNITION - 15 Round Reload'
  ];

  var mw11RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //.50 GS Attachments//
  ///////////////////////
  var gs50Muzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - OWC Light Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var gs50Barrel = [
    'BARREL - OWC Marksman',
    'BARREL - MIP Extended Light Barrel'
  ];

  var gs50Optic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Holographic Sight 1'
  ];

  var gs50Perk = [
    'PERK - Full Ammo',
    'PERK - FMJ',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Sleight of Hand',
    'PERK - Akimbo'
  ];

  var gs50Laser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var gs50Underbarrel = [
    'TRIGGER ACTION - Heavy Duty Trigger',
    'TRIGGER ACTION - Match Grade Trigger',
    'TRIGGER ACTION - Lightweight Trigger'
  ];

  var gs50Ammunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Large Extended Mag B'
  ];

  var gs50RearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Granulated Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  ///////////////////////
  //Renetti Attachments//
  ///////////////////////
  var renettiMuzzle = [
    'MUZZLE - OWC Light Suppressor',
    'MUZZLE - RTC Compensator',
    'MUZZLE - RTC Light Muzzle Brake',
    'MUZZLE - Tactical Suppressor',
    'MUZZLE - MIP Light Flash Guard',
    'MUZZLE - Monolithic Suppressor'
  ];

  var renettiBarrel = [
    'BARREL - MIP Extended Light Barrel',
    'BARREL - OWC Ranger',
    'BARREL - MIP Light'
  ];

  var renettiOptic = [
    'OPTIC - Classic Red Dot Sight',
    'OPTIC - Red Dot Sight 2',
    'OPTIC - Classic Holographic Sight',
    'OPTIC - Holographic Sight 2',
    'OPTIC - Red Dot Sight 3',
    'OPTIC - Holographic Sight 3',
    'OPTIC - Red Dot Sight 4',
    'OPTIC - Red Dot Sight 5',
    'OPTIC - Red Dot Sight 1',
    'OPTIC - Red Dot Sight 6',
    'OPTIC - Holographic Sight 1'
  ];

  var renettiStock = [
    'STOCK - Folding Stock',
    'STOCK - Control',
    'STOCK - Combo'
  ];

  var renettiPerk = [
    'PERK - Full Ammo',
    'PERK - FMJ',
    'PERK - Wounding',
    'PERK - Disable',
    'PERK - Sleight of Hand'
  ];

  var renettiLaser = [
    'LASER - RTC Laser 1mW',
    'LASER - MIP Laser 5mW',
    'LASER - OWC Laser - Tactical'
  ];

  var renettiUnderbarrel = [
    'TRIGGER ACTION - Heavy Duty Trigger',
    'TRIGGER ACTION - Match Grade Trigger',
    'TRIGGER ACTION - Lightweight Trigger'
  ];

  var renettiAmmunition = [
    'AMMUNITION - Extended Mag A',
    'AMMUNITION - Large Extended Mag B'
  ];

  var renettiRearGrip = [
    'REAR GRIP - Stippled Grip Tape',
    'REAR GRIP - Handmade Grip Tape',
    'REAR GRIP - Rubberized Grip Tape'
  ];

  // List of all Primary Weapons
  var primaryWeapons = [

    // ASSAULT
    'ASSAULT - M4',
    'ASSAULT - Type 25',
    'ASSAULT - M16',
    'ASSAULT - AK117',
    'ASSAULT - AK-47',
    'ASSAULT - ASM10',
    'ASSAULT - BK57',
    'ASSAULT - LK24',
    'ASSAULT - ICR-1',
    'ASSAULT - Man-O-War',
    'ASSAULT - KN-44',
    'ASSAULT - HBRa3',
    'ASSAULT - HVK-30',
    'ASSAULT - DR-H',
    'ASSAULT - Peacekeeper MK2',
    'ASSAULT - FR .556',
    'ASSAULT - AS VAL',
    'ASSAULT - CR-56 AMAX',

    // SNIPER
    'SNIPER - XPR-50',
    'SNIPER - Arctic .50',
    'SNIPER - M21 EBR',
    'SNIPER - DL Q33',
    'SNIPER - Locus',
    'SNIPER - Outlaw',
    'SNIPER - NA-45',

    // LMG
    'LMG - S36',
    'LMG - UL736',
    'LMG - RPD',
    'LMG - M4LMG',
    'LMG - Chopper',
    'LMG - Holger 26',

    // SMG
    'SMG - RUS-79U',
    'SMG - Chicom',
    'SMG - PDW-57',
    'SMG - Razorback',
    'SMG - MSMC',
    'SMG - HG 40',
    'SMG - Pharo',
    'SMG - GKS',
    'SMG - Cordite',
    'SMG - QQ9',
    'SMG - Fennec',
    'SMG - AGR 556',
    'SMG - QXR',
    'SMG - PP19 Bizon',

    // SHOTGUN
    'SHOTGUN - HS2126',
    'SHOTGUN - BY15',
    'SHOTGUN - HSO405',
    'SHOTGUN - Striker',
    'SHOTGUN - KRM 262',
    'SHOTGUN - Echo',

    // MARKSMAN
    'MARKSMAN - Kilo Bolt-Action',
    'MARKSMAN - SKS',
    'MARKSMAN - SP-R 208',
    'MARKSMAN - MK2'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < primaryWeapons.length; i++) {
    var randomNum = Math.floor(Math.random() * primaryWeapons.length);
    var temp = "";
    var current = primaryWeapons[i];
    var random = primaryWeapons[randomNum];
    // swap
    temp = current;
    primaryWeapons[i] = random;
    primaryWeapons[randomNum] = temp;
  }*/

  // Here we are selecting a random string from our primaryWeapons array
  var outputPrimary = primaryWeapons[Math.floor(Math.random() * primaryWeapons.length)];
  document.querySelector('#primary').innerHTML = outputPrimary;

  // List of all Secondary Weapons
  var secondaryWeapons = [

    // PISTOL
    'PISTOL - J358',
    'PISTOL - MW11',
    'PISTOL - .50 GS',
    'PISTOL - Renetti',

    // MELEE
    'MELEE - Knife',

    // LAUNCHER
    'LAUNCHER - FHJ-18',
    'LAUNCHER - SMRS'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < secondaryWeapons.length; i++) {
    var randomNum = Math.floor(Math.random() * secondaryWeapons.length);
    var temp = "";
    var current = secondaryWeapons[i];
    var random = secondaryWeapons[randomNum];
    // swap
    temp = current;
    secondaryWeapons[i] = random;
    secondaryWeapons[randomNum] = temp;
  }*/

  var outputSecondary = secondaryWeapons[Math.floor(Math.random() * secondaryWeapons.length)];
  document.querySelector('#secondary').innerHTML = outputSecondary;

  // List of all Lethals
  var lethal = [

    'Sticky Grenade',
    'Frag Granade',
    'Trip Mine',
    'Combat Axe',
    'Thermite',
    'Molotov Cocktail'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < lethal.length; i++) {
    var randomNum = Math.floor(Math.random() * lethal.length);
    var temp = "";
    var current = lethal[i];
    var random = lethal[randomNum];
    // swap
    temp = current;
    lethal[i] = random;
    lethal[randomNum] = temp;
  }*/

  var outputLethal = lethal[Math.floor(Math.random() * lethal.length)];
  document.querySelector('#lethal').innerHTML = outputLethal;

  // List of all Tacticals
  var tactical = [

    'Trophy System',
    'Flashbang Grenade',
    'Smoke Grenade',
    'Concussion Grenade',
    'EMP',
    'Cryo Bomb',
    'Gas Grenade',
    'Heartbeat Sensor'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < tactical.length; i++) {
    var randomNum = Math.floor(Math.random() * tactical.length);
    var temp = "";
    var current = tactical[i];
    var random = tactical[randomNum];
    // swap
    temp = current;
    tactical[i] = random;
    tactical[randomNum] = temp;
  }*/

  var outputTactical = tactical[Math.floor(Math.random() * tactical.length)];
  document.querySelector('#tactical').innerHTML = outputTactical;

  // List of all Operator Skills
  var operatorSkill = [

    'Annihilator',
    'Purifier',
    'War Machine',
    'Death Machine',
    'Transform Shield',
    'Sparrow',
    'Tempest',
    'H.I.V.E.',
    'Gravity Spikes',
    'Shadow Blade',
    'Equalizer',
    'Ballistic Shield',
    'Gravity Vortex Gun',
    'Bull Charge',
    'K9 UNIT'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < operatorSkill.length; i++) {
    var randomNum = Math.floor(Math.random() * operatorSkill.length);
    var temp = "";
    var current = operatorSkill[i];
    var random = operatorSkill[randomNum];
    // swap
    temp = current;
    operatorSkill[i] = random;
    operatorSkill[randomNum] = temp;
  }*/

  var outputOperatorSkill = operatorSkill[Math.floor(Math.random() * operatorSkill.length)];
  document.querySelector('#operatorSkill').innerHTML = outputOperatorSkill;

  // List of 1st Perks
  var perk1 = [

    'Flak Jacket',
    'Fast Recover',
    'Persistence',
    'Skulker',
    'Agile',
    'Lightweight',
    'Tactician',
    'Overclock',
    'Restock'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < perk1.length; i++) {
    var randomNum = Math.floor(Math.random() * perk1.length);
    var temp = "";
    var current = perk1[i];
    var random = perk1[randomNum];
    // swap
    temp = current;
    perk1[i] = random;
    perk1[randomNum] = temp;
  }*/

  var outputPerk1 = perk1[Math.floor(Math.random() * perk1.length)];
  document.querySelector('#perk1').innerHTML = outputPerk1;

  // List of 2nd Perks
  var perk2 = [

    'Vulture',
    'Toughness',
    'Tracker',
    'Ghost',
    'Cold-Blooded',
    'Hard Wired',
    'Quick Fix',
    'Amped',
    'Recon',
    'Gung-Ho'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < perk2.length; i++) {
    var randomNum = Math.floor(Math.random() * perk2.length);
    var temp = "";
    var current = perk2[i];
    var random = perk2[randomNum];
    // swap
    temp = current;
    perk2[i] = random;
    perk2[randomNum] = temp;
  }*/

  var outputPerk2 = perk2[Math.floor(Math.random() * perk2.length)];
  document.querySelector('#perk2').innerHTML = outputPerk2;

  // List of 3rd Perks
  var perk3 = [

    'Dead Silence',
    'Hardline',
    'Demo Expert',
    'Tactical Mask',
    'Alert',
    'Engineer',
    'Shrapnel',
    'High Alert',
    'Launcher Plus'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < perk3.length; i++) {
    var randomNum = Math.floor(Math.random() * perk3.length);
    var temp = "";
    var current = perk3[i];
    var random = perk3[randomNum];
    // swap
    temp = current;
    perk3[i] = random;
    perk3[randomNum] = temp;
  }*/

  var outputPerk3 = perk3[Math.floor(Math.random() * perk3.length)];
  document.querySelector('#perk3').innerHTML = outputPerk3;

  // List of all BR Classes
  var brclass = [

    'Trickster',
    'Scout',
    'Clown',
    'Medic',
    'Ninja',
    'Defender',
    'Mechanic',
    'Airborne',
    'Trap Master',
    'Poltergeist',
    'Smoke Bomber',
    'Hacker',
    'Refitter',
    'Desperado',
    'Spotter'
  ];

  // Shuffles the above Array's order
  /*for (var i = 0; i < brclass.length; i++) {
    var randomNum = Math.floor(Math.random() * brclass.length);
    var temp = "";
    var current = brclass[i];
    var random = brclass[randomNum];
    // swap
    temp = current;
    brclass[i] = random;
    brclass[randomNum] = temp;
  }*/

  var outputbrclass = brclass[Math.floor(Math.random() * brclass.length)];
  document.querySelector('#brclass').innerHTML = outputbrclass;

  // Here I put all the alternative slots (some guns were missing certain attachment classes)
  var primarySlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition',
    'Rear Grip'
  ];

  var secondarySlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition',
    'Rear Grip'
  ];

  var xprSlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition'
  ];

  var arcticSlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Underbarrel',
    'Ammunition',
    'Rear Grip'
  ];

  var m21Slots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition'
  ];

  var dlq33Slots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition'
  ];

  var locusSlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Ammunition',
    'Rear Grip'
  ];

  var pdwSlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Rear Grip'
  ];

  var na45Slots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition'
  ];

  var asvalSlots = [

    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition',
    'Rear Grip'
  ];

  var spr208Slots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Underbarrel',
    'Ammunition',
    'Bolt'
  ];

  var bizonSlots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Ammunition',
    'Rear Grip'
  ];

  var mk2Slots = [

    'Muzzle',
    'Barrel',
    'Optic',
    'Stock',
    'Perk',
    'Laser',
    'Ammunition',
    'Rear Grip'
  ];

  // Here we are grabbing 5 random strings depending on the randomly chosen weapon

  // Random Output 1
  output1 = primarySlots[Math.floor(Math.random() * primarySlots.length)];



  // Random Output 2
  output2 = primarySlots[Math.floor(Math.random() * primarySlots.length)];

  while (output1 == output2) {
    output2 = primarySlots[Math.floor(Math.random() * primarySlots.length)];
  }


  // Random Output 3
  output3 = primarySlots[Math.floor(Math.random() * primarySlots.length)];

  while (output3 == output1 || output3 == output2) {
    output3 = primarySlots[Math.floor(Math.random() * primarySlots.length)];
  }


  // Random Output 4
  output4 = primarySlots[Math.floor(Math.random() * primarySlots.length)];

  while (output4 == output1 || output4 == output2 || output4 == output3) {
    output4 = primarySlots[Math.floor(Math.random() * primarySlots.length)];
  }


  // Random Output 5
  output5 = primarySlots[Math.floor(Math.random() * primarySlots.length)];

  while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
    output5 = primarySlots[Math.floor(Math.random() * primarySlots.length)];
  }

  // Here is the brains of the program
  // based on our randomly chosen weapon slots
  // we run a bunch of if else if statements to find out which gun was randomly chosen
  // then we run more ifs to see which attachment classes were randomly chosen
  // for each attachment class found we randomly select an attachment form that weapons list

  // Checks if M4 is in outputPrimary
  if (outputPrimary == 'ASSAULT - M4') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = m4Muzzle[Math.floor(Math.random() * m4Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = m4Barrel[Math.floor(Math.random() * m4Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = m4Stock[Math.floor(Math.random() * m4Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = m4Perk[Math.floor(Math.random() * m4Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = m4Laser[Math.floor(Math.random() * m4Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = m4Underbarrel[Math.floor(Math.random() * m4Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = m4Ammunition[Math.floor(Math.random() * m4Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = m4RearGrip[Math.floor(Math.random() * m4RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - Type 25') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = type25Muzzle[Math.floor(Math.random() * type25Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = type25Barrel[Math.floor(Math.random() * type25Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = type25Stock[Math.floor(Math.random() * type25Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = type25Perk[Math.floor(Math.random() * type25Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = type25Laser[Math.floor(Math.random() * type25Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = type25Underbarrel[Math.floor(Math.random() * type25Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = type25Ammunition[Math.floor(Math.random() * type25Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = type25RearGrip[Math.floor(Math.random() * type25RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - M16') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = m16Muzzle[Math.floor(Math.random() * m16Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = m16Barrel[Math.floor(Math.random() * m16Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = m16Stock[Math.floor(Math.random() * m16Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = m16Perk[Math.floor(Math.random() * m16Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = m16Laser[Math.floor(Math.random() * m16Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = m16Underbarrel[Math.floor(Math.random() * m16Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = m16Ammunition[Math.floor(Math.random() * m16Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = m16RearGrip[Math.floor(Math.random() * m16RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - AK117') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = ak117Muzzle[Math.floor(Math.random() * ak117Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = ak117Barrel[Math.floor(Math.random() * ak117Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = ak117Stock[Math.floor(Math.random() * ak117Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = ak117Perk[Math.floor(Math.random() * ak117Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = ak117Laser[Math.floor(Math.random() * ak117Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = ak117Underbarrel[Math.floor(Math.random() * ak117Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = ak117Ammunition[Math.floor(Math.random() * ak117Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = ak117RearGrip[Math.floor(Math.random() * ak117RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - AK-47') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = ak47Muzzle[Math.floor(Math.random() * ak47Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = ak47Barrel[Math.floor(Math.random() * ak47Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = ak47Stock[Math.floor(Math.random() * ak47Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = ak47Perk[Math.floor(Math.random() * ak47Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = ak47Laser[Math.floor(Math.random() * ak47Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = ak47Underbarrel[Math.floor(Math.random() * ak47Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = ak47Ammunition[Math.floor(Math.random() * ak47Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = ak47RearGrip[Math.floor(Math.random() * ak47RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - ASM10') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = asm10Muzzle[Math.floor(Math.random() * asm10Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = asm10Barrel[Math.floor(Math.random() * asm10Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = asm10Stock[Math.floor(Math.random() * asm10Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = asm10Perk[Math.floor(Math.random() * asm10Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = asm10Laser[Math.floor(Math.random() * asm10Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = asm10Underbarrel[Math.floor(Math.random() * asm10Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = asm10Ammunition[Math.floor(Math.random() * asm10Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = asm10RearGrip[Math.floor(Math.random() * asm10RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - BK57') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = bk57Muzzle[Math.floor(Math.random() * bk57Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = bk57Barrel[Math.floor(Math.random() * bk57Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = bk57Stock[Math.floor(Math.random() * bk57Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = bk57Perk[Math.floor(Math.random() * bk57Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = bk57Laser[Math.floor(Math.random() * bk57Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = bk57Underbarrel[Math.floor(Math.random() * bk57Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = bk57Ammunition[Math.floor(Math.random() * bk57Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = bk57RearGrip[Math.floor(Math.random() * bk57RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - LK24') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = lk24Muzzle[Math.floor(Math.random() * lk24Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = lk24Barrel[Math.floor(Math.random() * lk24Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = lk24Stock[Math.floor(Math.random() * lk24Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = lk24Perk[Math.floor(Math.random() * lk24Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = lk24Laser[Math.floor(Math.random() * lk24Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = lk24Underbarrel[Math.floor(Math.random() * lk24Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = lk24Ammunition[Math.floor(Math.random() * lk24Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = lk24RearGrip[Math.floor(Math.random() * lk24RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - ICR-1') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = icr1Muzzle[Math.floor(Math.random() * icr1Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = icr1Barrel[Math.floor(Math.random() * icr1Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = icr1Stock[Math.floor(Math.random() * icr1Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = icr1Perk[Math.floor(Math.random() * icr1Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = icr1Laser[Math.floor(Math.random() * icr1Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = icr1Underbarrel[Math.floor(Math.random() * icr1Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = icr1Ammunition[Math.floor(Math.random() * icr1Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = icr1RearGrip[Math.floor(Math.random() * icr1RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - Man-O-War') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = manOWarMuzzle[Math.floor(Math.random() * manOWarMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = manOWarBarrel[Math.floor(Math.random() * manOWarBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = manOWarStock[Math.floor(Math.random() * manOWarStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = manOWarPerk[Math.floor(Math.random() * manOWarPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = manOWarLaser[Math.floor(Math.random() * manOWarLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = manOWarUnderbarrel[Math.floor(Math.random() * manOWarUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = manOWarAmmunition[Math.floor(Math.random() * manOWarAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = manOWarRearGrip[Math.floor(Math.random() * manOWarRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - KN-44') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = kn44Muzzle[Math.floor(Math.random() * kn44Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = kn44Barrel[Math.floor(Math.random() * kn44Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = kn44Stock[Math.floor(Math.random() * kn44Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = kn44Perk[Math.floor(Math.random() * kn44Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = kn44Laser[Math.floor(Math.random() * kn44Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = kn44Underbarrel[Math.floor(Math.random() * kn44Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = kn44Ammunition[Math.floor(Math.random() * kn44Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = kn44RearGrip[Math.floor(Math.random() * kn44RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - HBRa3') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = hbra3Muzzle[Math.floor(Math.random() * hbra3Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = hbra3Barrel[Math.floor(Math.random() * hbra3Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = hbra3Stock[Math.floor(Math.random() * hbra3Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = hbra3Perk[Math.floor(Math.random() * hbra3Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = hbra3Laser[Math.floor(Math.random() * hbra3Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = hbra3Underbarrel[Math.floor(Math.random() * hbra3Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = hbra3Ammunition[Math.floor(Math.random() * hbra3Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = hbra3RearGrip[Math.floor(Math.random() * hbra3RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - HVK-30') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = hvk30Muzzle[Math.floor(Math.random() * hvk30Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = hvk30Barrel[Math.floor(Math.random() * hvk30Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = hvk30Stock[Math.floor(Math.random() * hvk30Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = hvk30Perk[Math.floor(Math.random() * hvk30Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = hvk30Laser[Math.floor(Math.random() * hvk30Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = hvk30Underbarrel[Math.floor(Math.random() * hvk30Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = hvk30Ammunition[Math.floor(Math.random() * hvk30Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = hvk30RearGrip[Math.floor(Math.random() * hvk30RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - DR-H') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = drhMuzzle[Math.floor(Math.random() * drhMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = drhBarrel[Math.floor(Math.random() * drhBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = drhStock[Math.floor(Math.random() * drhStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = drhPerk[Math.floor(Math.random() * drhPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = drhLaser[Math.floor(Math.random() * drhLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = drhUnderbarrel[Math.floor(Math.random() * drhUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = drhAmmunition[Math.floor(Math.random() * drhAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = drhRearGrip[Math.floor(Math.random() * drhRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - Peacekeeper MK2') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = peacekeepermk2Muzzle[Math.floor(Math.random() * peacekeepermk2Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = peacekeepermk2Barrel[Math.floor(Math.random() * peacekeepermk2Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = peacekeepermk2Optic[Math.floor(Math.random() * peacekeepermk2Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = peacekeepermk2Stock[Math.floor(Math.random() * peacekeepermk2Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = peacekeepermk2Perk[Math.floor(Math.random() * peacekeepermk2Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = peacekeepermk2Laser[Math.floor(Math.random() * peacekeepermk2Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = peacekeepermk2Underbarrel[Math.floor(Math.random() * peacekeepermk2Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = peacekeepermk2Ammunition[Math.floor(Math.random() * peacekeepermk2Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = peacekeepermk2RearGrip[Math.floor(Math.random() * peacekeepermk2RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - FR .556') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = fr556Muzzle[Math.floor(Math.random() * fr556Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = fr556Barrel[Math.floor(Math.random() * fr556Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = fr556Stock[Math.floor(Math.random() * fr556Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = fr556Perk[Math.floor(Math.random() * fr556Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = fr556Laser[Math.floor(Math.random() * fr556Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = fr556Underbarrel[Math.floor(Math.random() * fr556Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = fr556Ammunition[Math.floor(Math.random() * fr556Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = fr556RearGrip[Math.floor(Math.random() * fr556RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - AS VAL') {

    // Random Output 1
    output1 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];



    // Random Output 2
    output2 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];

    while (output1 == output2) {
      output2 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];
    }


    // Random Output 3
    output3 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];
    }


    // Random Output 4
    output4 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];
    }


    // Random Output 5
    output5 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = asvalSlots[Math.floor(Math.random() * asvalSlots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = asvalMuzzle[Math.floor(Math.random() * asvalMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = asvalBarrel[Math.floor(Math.random() * asvalBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = asvalStock[Math.floor(Math.random() * asvalStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = asvalPerk[Math.floor(Math.random() * asvalPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = asvalLaser[Math.floor(Math.random() * asvalLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = asvalUnderbarrel[Math.floor(Math.random() * asvalUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = asvalAmmunition[Math.floor(Math.random() * asvalAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = asvalRearGrip[Math.floor(Math.random() * asvalRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'ASSAULT - CR-56 AMAX') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = cr56amaxMuzzle[Math.floor(Math.random() * cr56amaxMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = cr56amaxBarrel[Math.floor(Math.random() * cr56amaxBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = cr56amaxStock[Math.floor(Math.random() * cr56amaxStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = cr56amaxPerk[Math.floor(Math.random() * cr56amaxPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = cr56amaxLaser[Math.floor(Math.random() * cr56amaxLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = cr56amaxUnderbarrel[Math.floor(Math.random() * cr56amaxUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = cr56amaxAmmunition[Math.floor(Math.random() * cr56amaxAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = cr56amaxRearGrip[Math.floor(Math.random() * cr56amaxRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SNIPER - XPR-50') {

    // Random Output 1
    output1 = xprSlots[Math.floor(Math.random() * xprSlots.length)];



    // Random Output 2
    output2 = xprSlots[Math.floor(Math.random() * xprSlots.length)];

    while (output1 == output2) {
      output2 = xprSlots[Math.floor(Math.random() * xprSlots.length)];
    }


    // Random Output 3
    output3 = xprSlots[Math.floor(Math.random() * xprSlots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = xprSlots[Math.floor(Math.random() * xprSlots.length)];
    }


    // Random Output 4
    output4 = xprSlots[Math.floor(Math.random() * xprSlots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = xprSlots[Math.floor(Math.random() * xprSlots.length)];
    }


    // Random Output 5
    output5 = xprSlots[Math.floor(Math.random() * xprSlots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = xprSlots[Math.floor(Math.random() * xprSlots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = xpr50Muzzle[Math.floor(Math.random() * xpr50Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = xpr50Barrel[Math.floor(Math.random() * xpr50Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = xpr50Optic[Math.floor(Math.random() * xpr50Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = xpr50Stock[Math.floor(Math.random() * xpr50Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = xpr50Perk[Math.floor(Math.random() * xpr50Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = xpr50Laser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = xpr50Underbarrel[Math.floor(Math.random() * xpr50Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = xpr50Ammunition[Math.floor(Math.random() * xpr50Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = xpr50RearGrip[Math.floor(Math.random() * xpr50RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  }  else if (outputPrimary == 'SNIPER - Arctic .50') {

    // Random Output 1
    output1 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];



    // Random Output 2
    output2 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];

    while (output1 == output2) {
      output2 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];
    }


    // Random Output 3
    output3 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];
    }


    // Random Output 4
    output4 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];
    }


    // Random Output 5
    output5 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = arcticSlots[Math.floor(Math.random() * arcticSlots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = arctic50Muzzle[Math.floor(Math.random() * arctic50Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = arctic50Barrel[Math.floor(Math.random() * arctic50Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = arctic50Optic[Math.floor(Math.random() * arctic50Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = arctic50Stock[Math.floor(Math.random() * arctic50Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = arctic50Perk[Math.floor(Math.random() * arctic50Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = arctic50Laser[Math.floor(Math.random() * arctic50Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = arctic50Underbarrel;
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = arctic50Ammunition[Math.floor(Math.random() * arctic50Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = arctic50RearGrip[Math.floor(Math.random() * arctic50RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SNIPER - M21 EBR') {

    // Random Output 1
    output1 = m21Slots[Math.floor(Math.random() * m21Slots.length)];



    // Random Output 2
    output2 = m21Slots[Math.floor(Math.random() * m21Slots.length)];

    while (output1 == output2) {
      output2 = m21Slots[Math.floor(Math.random() * m21Slots.length)];
    }


    // Random Output 3
    output3 = m21Slots[Math.floor(Math.random() * m21Slots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = m21Slots[Math.floor(Math.random() * m21Slots.length)];
    }


    // Random Output 4
    output4 = m21Slots[Math.floor(Math.random() * m21Slots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = m21Slots[Math.floor(Math.random() * m21Slots.length)];
    }


    // Random Output 5
    output5 = m21Slots[Math.floor(Math.random() * m21Slots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = m21Slots[Math.floor(Math.random() * m21Slots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = m21ebrMuzzle[Math.floor(Math.random() * m21ebrMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = m21ebrBarrel[Math.floor(Math.random() * m21ebrBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = m21ebrOptic[Math.floor(Math.random() * m21ebrOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = m21ebrStock[Math.floor(Math.random() * m21ebrStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = m21ebrPerk[Math.floor(Math.random() * m21ebrPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = m21ebrLaser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = m21ebrUnderbarrel[Math.floor(Math.random() * m21ebrUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = m21ebrAmmunition[Math.floor(Math.random() * m21ebrAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = m21ebrRearGrip[Math.floor(Math.random() * m21ebrRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SNIPER - DL Q33') {

    // Random Output 1
    output1 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];



    // Random Output 2
    output2 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];

    while (output1 == output2) {
      output2 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];
    }


    // Random Output 3
    output3 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];
    }


    // Random Output 4
    output4 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];
    }


    // Random Output 5
    output5 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = dlq33Slots[Math.floor(Math.random() * dlq33Slots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = dlq33Muzzle[Math.floor(Math.random() * dlq33Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = dlq33Barrel[Math.floor(Math.random() * dlq33Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = dlq33Optic[Math.floor(Math.random() * dlq33Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = dlq33Stock[Math.floor(Math.random() * dlq33Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = dlq33Perk[Math.floor(Math.random() * dlq33Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = dlq33Laser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = dlq33Underbarrel;
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = dlq33Ammunition[Math.floor(Math.random() * dlq33Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = dlq33RearGrip[Math.floor(Math.random() * dlq33RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SNIPER - Locus') {

    // Random Output 1
    output1 = locusSlots[Math.floor(Math.random() * locusSlots.length)];



    // Random Output 2
    output2 = locusSlots[Math.floor(Math.random() * locusSlots.length)];

    while (output1 == output2) {
      output2 = locusSlots[Math.floor(Math.random() * locusSlots.length)];
    }


    // Random Output 3
    output3 = locusSlots[Math.floor(Math.random() * locusSlots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = locusSlots[Math.floor(Math.random() * locusSlots.length)];
    }


    // Random Output 4
    output4 = locusSlots[Math.floor(Math.random() * locusSlots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = locusSlots[Math.floor(Math.random() * locusSlots.length)];
    }


    // Random Output 5
    output5 = locusSlots[Math.floor(Math.random() * locusSlots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = locusSlots[Math.floor(Math.random() * locusSlots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = locusMuzzle[Math.floor(Math.random() * locusMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = locusBarrel[Math.floor(Math.random() * locusBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = locusOptic[Math.floor(Math.random() * locusOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = locusStock[Math.floor(Math.random() * locusStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = locusPerk[Math.floor(Math.random() * locusPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = locusLaser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = locusUnderbarrel[Math.floor(Math.random() * locusUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = locusAmmunition[Math.floor(Math.random() * locusAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = locusRearGrip[Math.floor(Math.random() * locusRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SNIPER - Outlaw') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = outlawMuzzle[Math.floor(Math.random() * outlawMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = outlawBarrel[Math.floor(Math.random() * outlawBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = outlawOptic[Math.floor(Math.random() * outlawOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = outlawStock[Math.floor(Math.random() * outlawStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = outlawPerk[Math.floor(Math.random() * outlawPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = outlawLaser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = outlawUnderbarrel;
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = outlawAmmunition[Math.floor(Math.random() * outlawAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = outlawRearGrip[Math.floor(Math.random() * outlawRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SNIPER - NA-45') {

    // Random Output 1
    output1 = na45Slots[Math.floor(Math.random() * na45Slots.length)];



    // Random Output 2
    output2 = na45Slots[Math.floor(Math.random() * na45Slots.length)];

    while (output1 == output2) {
      output2 = na45Slots[Math.floor(Math.random() * na45Slots.length)];
    }


    // Random Output 3
    output3 = na45Slots[Math.floor(Math.random() * na45Slots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = na45Slots[Math.floor(Math.random() * na45Slots.length)];
    }


    // Random Output 4
    output4 = na45Slots[Math.floor(Math.random() * na45Slots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = na45Slots[Math.floor(Math.random() * na45Slots.length)];
    }


    // Random Output 5
    output5 = na45Slots[Math.floor(Math.random() * na45Slots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = na45Slots[Math.floor(Math.random() * na45Slots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = na45Muzzle[Math.floor(Math.random() * na45Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = na45Barrel[Math.floor(Math.random() * na45Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = na45Optic[Math.floor(Math.random() * na45Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = na45Stock[Math.floor(Math.random() * na45Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = na45Perk[Math.floor(Math.random() * na45Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = na45Laser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = na45Underbarrel[Math.floor(Math.random() * na45Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = na45Ammunition[Math.floor(Math.random() * na45Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = na45RearGrip[Math.floor(Math.random() * na45RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'MARKSMAN - SP-R 208') {

    // Random Output 1
    output1 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];



    // Random Output 2
    output2 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];

    while (output1 == output2) {
      output2 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];
    }


    // Random Output 3
    output3 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];
    }


    // Random Output 4
    output4 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];
    }


    // Random Output 5
    output5 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = spr208Slots[Math.floor(Math.random() * spr208Slots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = spr208Muzzle[Math.floor(Math.random() * spr208Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = spr208Barrel[Math.floor(Math.random() * spr208Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = spr208Optic[Math.floor(Math.random() * spr208Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = spr208Stock[Math.floor(Math.random() * spr208Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = spr208Perk[Math.floor(Math.random() * spr208Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = spr208Laser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = spr208Underbarrel[Math.floor(Math.random() * spr208Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = spr208Ammunition[Math.floor(Math.random() * spr208Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Bolt Included?
    if (output1 == 'Bolt' || output2 == 'Bolt' || output3 == 'Bolt' || output4 == 'Bolt' || output5 == 'Bolt') {

      var m4Final9 = spr208Bolt[Math.floor(Math.random() * spr208Bolt.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'LMG - S36') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = s36Muzzle[Math.floor(Math.random() * s36Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = s36Barrel[Math.floor(Math.random() * s36Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = s36Stock[Math.floor(Math.random() * s36Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = s36Perk[Math.floor(Math.random() * s36Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = s36Laser[Math.floor(Math.random() * s36Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = s36Underbarrel[Math.floor(Math.random() * s36Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = s36Ammunition[Math.floor(Math.random() * s36Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = s36RearGrip[Math.floor(Math.random() * s36RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'LMG - UL736') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = ul736Muzzle[Math.floor(Math.random() * ul736Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = ul736Barrel[Math.floor(Math.random() * ul736Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = ul736Stock[Math.floor(Math.random() * ul736Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = ul736Perk[Math.floor(Math.random() * ul736Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = ul736Laser[Math.floor(Math.random() * ul736Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = ul736Underbarrel[Math.floor(Math.random() * ul736Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = ul736Ammunition[Math.floor(Math.random() * ul736Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = ul736RearGrip[Math.floor(Math.random() * ul736RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'LMG - RPD') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = rpdMuzzle[Math.floor(Math.random() * rpdMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = rpdBarrel[Math.floor(Math.random() * rpdBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = rpdStock[Math.floor(Math.random() * rpdStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = rpdPerk[Math.floor(Math.random() * rpdPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = rpdLaser[Math.floor(Math.random() * rpdLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = rpdUnderbarrel[Math.floor(Math.random() * rpdUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = rpdAmmunition[Math.floor(Math.random() * rpdAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = rpdRearGrip[Math.floor(Math.random() * rpdRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'LMG - M4LMG') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = m4lmgMuzzle[Math.floor(Math.random() * m4lmgMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = m4lmgBarrel[Math.floor(Math.random() * m4lmgBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = m4lmgStock[Math.floor(Math.random() * m4lmgStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = m4lmgPerk[Math.floor(Math.random() * m4lmgPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = m4lmgLaser[Math.floor(Math.random() * m4lmgLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = m4lmgUnderbarrel[Math.floor(Math.random() * m4lmgUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = m4lmgAmmunition[Math.floor(Math.random() * m4lmgAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = m4lmgRearGrip[Math.floor(Math.random() * m4lmgRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'LMG - Chopper') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = chopperMuzzle[Math.floor(Math.random() * chopperMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = chopperBarrel[Math.floor(Math.random() * chopperBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = chopperStock[Math.floor(Math.random() * chopperStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = chopperPerk[Math.floor(Math.random() * chopperPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = chopperLaser[Math.floor(Math.random() * chopperLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = chopperUnderbarrel[Math.floor(Math.random() * chopperUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = chopperAmmunition[Math.floor(Math.random() * chopperAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = chopperRearGrip[Math.floor(Math.random() * chopperRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'LMG - Holger 26') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = holger26Muzzle[Math.floor(Math.random() * holger26Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = holger26Barrel[Math.floor(Math.random() * holger26Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = generalOptic[Math.floor(Math.random() * generalOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = holger26Stock[Math.floor(Math.random() * holger26Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = holger26Perk[Math.floor(Math.random() * holger26Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = holger26Laser[Math.floor(Math.random() * holger26Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = holger26Underbarrel[Math.floor(Math.random() * holger26Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = holger26Ammunition[Math.floor(Math.random() * holger26Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = holger26RearGrip[Math.floor(Math.random() * holger26RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - RUS-79U') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = rus79uMuzzle[Math.floor(Math.random() * rus79uMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = rus79uBarrel[Math.floor(Math.random() * rus79uBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = rus79uOptic[Math.floor(Math.random() * rus79uOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = rus79uStock[Math.floor(Math.random() * rus79uStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = rus79uPerk[Math.floor(Math.random() * rus79uPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = rus79uLaser[Math.floor(Math.random() * rus79uLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = rus79uUnderbarrel[Math.floor(Math.random() * rus79uUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = rus79uAmmunition[Math.floor(Math.random() * rus79uAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = rus79uRearGrip[Math.floor(Math.random() * rus79uRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - Chicom') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = chicomMuzzle[Math.floor(Math.random() * chicomMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = chicomBarrel[Math.floor(Math.random() * chicomBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = chicomOptic[Math.floor(Math.random() * chicomOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = chicomStock[Math.floor(Math.random() * chicomStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = chicomPerk[Math.floor(Math.random() * chicomPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = chicomLaser[Math.floor(Math.random() * chicomLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = chicomUnderbarrel[Math.floor(Math.random() * chicomUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = chicomAmmunition[Math.floor(Math.random() * chicomAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = chicomRearGrip[Math.floor(Math.random() * chicomRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - PDW-57') {

    // Random Output 1
    output1 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];



    // Random Output 2
    output2 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];

    while (output1 == output2) {
      output2 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];
    }


    // Random Output 3
    output3 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];
    }


    // Random Output 4
    output4 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];
    }


    // Random Output 5
    output5 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = pdwSlots[Math.floor(Math.random() * pdwSlots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = pdw57Muzzle[Math.floor(Math.random() * pdw57Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = pdw57Barrel[Math.floor(Math.random() * pdw57Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = pdw57Optic[Math.floor(Math.random() * pdw57Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = pdw57Stock[Math.floor(Math.random() * pdw57Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = pdw57Perk[Math.floor(Math.random() * pdw57Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = pdw57Laser[Math.floor(Math.random() * pdw57Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = pdw57Underbarrel[Math.floor(Math.random() * pdw57Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = pdw57Ammunition[Math.floor(Math.random() * pdw57Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = pdw57RearGrip[Math.floor(Math.random() * pdw57RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - Razorback') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = razorbackMuzzle[Math.floor(Math.random() * razorbackMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = razorbackBarrel[Math.floor(Math.random() * razorbackBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = razorbackOptic[Math.floor(Math.random() * razorbackOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = razorbackStock[Math.floor(Math.random() * razorbackStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = razorbackPerk[Math.floor(Math.random() * razorbackPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = razorbackLaser[Math.floor(Math.random() * razorbackLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = razorbackUnderbarrel[Math.floor(Math.random() * razorbackUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = razorbackAmmunition;
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = razorbackRearGrip[Math.floor(Math.random() * razorbackRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - MSMC') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = msmcMuzzle[Math.floor(Math.random() * msmcMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = msmcBarrel[Math.floor(Math.random() * msmcBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = msmcOptic[Math.floor(Math.random() * msmcOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = msmcStock[Math.floor(Math.random() * msmcStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = msmcPerk[Math.floor(Math.random() * msmcPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = msmcLaser[Math.floor(Math.random() * msmcLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = msmcUnderbarrel[Math.floor(Math.random() * msmcUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = msmcAmmunition[Math.floor(Math.random() * msmcAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = msmcRearGrip[Math.floor(Math.random() * msmcRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - HG 40') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = hg40Muzzle[Math.floor(Math.random() * hg40Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = hg40Barrel[Math.floor(Math.random() * hg40Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = hg40Optic[Math.floor(Math.random() * hg40Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = hg40Stock[Math.floor(Math.random() * hg40Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = hg40Perk[Math.floor(Math.random() * hg40Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = hg40Laser[Math.floor(Math.random() * hg40Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = hg40Underbarrel[Math.floor(Math.random() * hg40Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = hg40Ammunition[Math.floor(Math.random() * hg40Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = hg40RearGrip[Math.floor(Math.random() * hg40RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - Pharo') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = pharoMuzzle[Math.floor(Math.random() * pharoMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = pharoBarrel[Math.floor(Math.random() * pharoBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = pharoOptic[Math.floor(Math.random() * pharoOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = pharoStock[Math.floor(Math.random() * pharoStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = pharoPerk[Math.floor(Math.random() * pharoPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = pharoLaser[Math.floor(Math.random() * pharoLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = pharoUnderbarrel[Math.floor(Math.random() * pharoUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = pharoAmmunition[Math.floor(Math.random() * pharoAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = pharoRearGrip[Math.floor(Math.random() * pharoRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - GKS') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = gksMuzzle[Math.floor(Math.random() * gksMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = gksBarrel[Math.floor(Math.random() * gksBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = gksOptic[Math.floor(Math.random() * gksOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = gksStock[Math.floor(Math.random() * gksStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = gksPerk[Math.floor(Math.random() * gksPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = gksLaser[Math.floor(Math.random() * gksLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = gksUnderbarrel[Math.floor(Math.random() * gksUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = gksAmmunition[Math.floor(Math.random() * gksAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = gksRearGrip[Math.floor(Math.random() * gksRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - Cordite') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = corditeMuzzle[Math.floor(Math.random() * corditeMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = corditeBarrel[Math.floor(Math.random() * corditeBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = corditeOptic[Math.floor(Math.random() * corditeOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = corditeStock[Math.floor(Math.random() * corditeStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = corditePerk[Math.floor(Math.random() * corditePerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = corditeLaser[Math.floor(Math.random() * corditeLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = corditeUnderbarrel[Math.floor(Math.random() * corditeUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = corditeAmmunition[Math.floor(Math.random() * corditeAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = corditeRearGrip[Math.floor(Math.random() * corditeRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - QQ9') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = qq9Muzzle[Math.floor(Math.random() * qq9Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = qq9Barrel[Math.floor(Math.random() * qq9Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = qq9Optic[Math.floor(Math.random() * qq9Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = qq9Stock[Math.floor(Math.random() * qq9Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = qq9Perk[Math.floor(Math.random() * qq9Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = qq9Laser[Math.floor(Math.random() * qq9Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = qq9Underbarrel[Math.floor(Math.random() * qq9Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = qq9Ammunition[Math.floor(Math.random() * qq9Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = qq9RearGrip[Math.floor(Math.random() * qq9RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - Fennec') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = fennecMuzzle[Math.floor(Math.random() * fennecMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = fennecBarrel[Math.floor(Math.random() * fennecBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = fennecOptic[Math.floor(Math.random() * fennecOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = fennecStock[Math.floor(Math.random() * fennecStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = fennecPerk[Math.floor(Math.random() * fennecPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = fennecLaser[Math.floor(Math.random() * fennecLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = fennecUnderbarrel[Math.floor(Math.random() * fennecUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = fennecAmmunition[Math.floor(Math.random() * fennecAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = fennecRearGrip[Math.floor(Math.random() * fennecRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - AGR 556') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = agr556Muzzle[Math.floor(Math.random() * agr556Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = agr556Barrel[Math.floor(Math.random() * agr556Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = agr556Optic[Math.floor(Math.random() * agr556Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = agr556Stock[Math.floor(Math.random() * agr556Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = agr556Perk[Math.floor(Math.random() * agr556Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = agr556Laser[Math.floor(Math.random() * agr556Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = agr556Underbarrel[Math.floor(Math.random() * agr556Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = agr556Ammunition[Math.floor(Math.random() * agr556Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = agr556RearGrip[Math.floor(Math.random() * agr556RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - QXR') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = qxrMuzzle[Math.floor(Math.random() * qxrMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = qxrBarrel[Math.floor(Math.random() * qxrBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = qxrOptic[Math.floor(Math.random() * qxrOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = qxrStock[Math.floor(Math.random() * qxrStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = qxrPerk[Math.floor(Math.random() * qxrPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = qxrLaser[Math.floor(Math.random() * qxrLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = qxrUnderbarrel[Math.floor(Math.random() * qxrUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = qxrAmmunition[Math.floor(Math.random() * qxrAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = qxrRearGrip[Math.floor(Math.random() * qxrRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SMG - PP19 Bizon') {

    // Random Output 1
    output1 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];



    // Random Output 2
    output2 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];

    while (output1 == output2) {
      output2 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];
    }


    // Random Output 3
    output3 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];
    }


    // Random Output 4
    output4 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];
    }


    // Random Output 5
    output5 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = bizonSlots[Math.floor(Math.random() * bizonSlots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = bizonMuzzle[Math.floor(Math.random() * bizonMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = bizonBarrel[Math.floor(Math.random() * bizonBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = bizonOptic[Math.floor(Math.random() * bizonOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = bizonStock[Math.floor(Math.random() * bizonStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = bizonPerk[Math.floor(Math.random() * bizonPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = bizonLaser[Math.floor(Math.random() * bizonLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = bizonUnderbarrel[Math.floor(Math.random() * bizonUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = bizonAmmunition[Math.floor(Math.random() * bizonAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = bizonRearGrip[Math.floor(Math.random() * bizonRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SHOTGUN - HS2126') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = hs2126Muzzle[Math.floor(Math.random() * hs2126Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = hs2126Barrel[Math.floor(Math.random() * hs2126Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = hs2126Optic[Math.floor(Math.random() * hs2126Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = hs2126Stock[Math.floor(Math.random() * hs2126Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = hs2126Perk[Math.floor(Math.random() * hs2126Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = hs2126Laser[Math.floor(Math.random() * hs2126Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = hs2126Underbarrel[Math.floor(Math.random() * hs2126Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = hs2126Ammunition[Math.floor(Math.random() * hs2126Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = hs2126RearGrip[Math.floor(Math.random() * hs2126RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SHOTGUN - BY15') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = by15Muzzle[Math.floor(Math.random() * by15Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = by15Barrel[Math.floor(Math.random() * by15Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = by15Optic[Math.floor(Math.random() * by15Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = by15Stock[Math.floor(Math.random() * by15Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = by15Perk[Math.floor(Math.random() * by15Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = by15Laser[Math.floor(Math.random() * by15Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = by15Underbarrel[Math.floor(Math.random() * by15Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = by15Ammunition[Math.floor(Math.random() * by15Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = by15RearGrip[Math.floor(Math.random() * by15RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SHOTGUN - HSO405') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = hso405Muzzle[Math.floor(Math.random() * hso405Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = hso405Barrel[Math.floor(Math.random() * hso405Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = hso405Optic[Math.floor(Math.random() * hso405Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = hso405Stock[Math.floor(Math.random() * hso405Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = hso405Perk[Math.floor(Math.random() * hso405Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = hso405Laser[Math.floor(Math.random() * hso405Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = hso405Underbarrel[Math.floor(Math.random() * hso405Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = hso405Ammunition[Math.floor(Math.random() * hso405Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = hso405RearGrip[Math.floor(Math.random() * hso405RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SHOTGUN - Striker') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = strikerMuzzle[Math.floor(Math.random() * strikerMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = strikerBarrel[Math.floor(Math.random() * strikerBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = strikerOptic[Math.floor(Math.random() * strikerOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = strikerStock[Math.floor(Math.random() * strikerStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = strikerPerk[Math.floor(Math.random() * strikerPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = strikerLaser[Math.floor(Math.random() * strikerLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = strikerUnderbarrel[Math.floor(Math.random() * strikerUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = strikerAmmunition[Math.floor(Math.random() * strikerAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = strikerRearGrip[Math.floor(Math.random() * strikerRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SHOTGUN - KRM 262') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = krm262Muzzle[Math.floor(Math.random() * krm262Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = krm262Barrel[Math.floor(Math.random() * krm262Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = krm262Optic[Math.floor(Math.random() * krm262Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = krm262Stock[Math.floor(Math.random() * krm262Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = krm262Perk[Math.floor(Math.random() * krm262Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = krm262Laser[Math.floor(Math.random() * krm262Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = krm262Underbarrel[Math.floor(Math.random() * krm262Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = krm262Ammunition[Math.floor(Math.random() * krm262Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = krm262RearGrip[Math.floor(Math.random() * krm262RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'SHOTGUN - Echo') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = echoMuzzle[Math.floor(Math.random() * echoMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = echoBarrel[Math.floor(Math.random() * echoBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = echoOptic[Math.floor(Math.random() * echoOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = echoStock[Math.floor(Math.random() * echoStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = echoPerk[Math.floor(Math.random() * echoPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = echoLaser[Math.floor(Math.random() * echoLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = echoUnderbarrel[Math.floor(Math.random() * echoUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = echoAmmunition[Math.floor(Math.random() * echoAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = echoRearGrip[Math.floor(Math.random() * echoRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'MARKSMAN - Kilo Bolt-Action') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = kiloMuzzle[Math.floor(Math.random() * kiloMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = kiloBarrel[Math.floor(Math.random() * kiloBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = kiloOptic[Math.floor(Math.random() * kiloOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = kiloStock[Math.floor(Math.random() * kiloStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = kiloPerk[Math.floor(Math.random() * kiloPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = kiloLaser;
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = kiloUnderbarrel;
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = kiloAmmunition[Math.floor(Math.random() * kiloAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = kiloRearGrip[Math.floor(Math.random() * kiloRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'MARKSMAN - SKS') {

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = sksMuzzle[Math.floor(Math.random() * sksMuzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = sksBarrel[Math.floor(Math.random() * sksBarrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = sksOptic[Math.floor(Math.random() * sksOptic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = sksStock[Math.floor(Math.random() * sksStock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = sksPerk[Math.floor(Math.random() * sksPerk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = sksLaser[Math.floor(Math.random() * sksLaser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = sksUnderbarrel[Math.floor(Math.random() * sksUnderbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = sksAmmunition[Math.floor(Math.random() * sksAmmunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = sksRearGrip[Math.floor(Math.random() * sksRearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  } else if (outputPrimary == 'MARKSMAN - MK2') {

    // Random Output 1
    output1 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];



    // Random Output 2
    output2 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];

    while (output1 == output2) {
      output2 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];
    }


    // Random Output 3
    output3 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];

    while (output3 == output1 || output3 == output2) {
      output3 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];
    }


    // Random Output 4
    output4 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];

    while (output4 == output1 || output4 == output2 || output4 == output3) {
      output4 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];
    }


    // Random Output 5
    output5 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];

    while (output5 == output1 || output5 == output2 || output5 == output3 || output5 == output4) {
      output5 = mk2Slots[Math.floor(Math.random() * mk2Slots.length)];
    }

    // Is Muzzle Included?
    if (output1 == 'Muzzle' || output2 == 'Muzzle' || output3 == 'Muzzle' || output4 == 'Muzzle' || output5 == 'Muzzle') {

      var m4Final1 = mk2Muzzle[Math.floor(Math.random() * mk2Muzzle.length)];
      document.querySelector('#primary1').innerHTML = m4Final1;

    }
    // Is Barrel Included?
    if (output1 == 'Barrel' || output2 == 'Barrel' || output3 == 'Barrel' || output4 == 'Barrel' || output5 == 'Barrel') {

      var m4Final2 = mk2Barrel[Math.floor(Math.random() * mk2Barrel.length)];
      document.querySelector('#primary2').innerHTML = m4Final2;

    }
    // Is Optic Included?
    if (output1 == 'Optic' || output2 == 'Optic' || output3 == 'Optic' || output4 == 'Optic' || output5 == 'Optic') {

      var m4Final3 = mk2Optic[Math.floor(Math.random() * mk2Optic.length)];
      document.querySelector('#primary3').innerHTML = m4Final3;

    }
    // Is Stock Included?
    if (output1 == 'Stock' || output2 == 'Stock' || output3 == 'Stock' || output4 == 'Stock' || output5 == 'Stock') {

      var m4Final4 = mk2Stock[Math.floor(Math.random() * mk2Stock.length)];
      document.querySelector('#primary4').innerHTML = m4Final4;

    }
    // Is Perk Included?
    if (output1 == 'Perk' || output2 == 'Perk' || output3 == 'Perk' || output4 == 'Perk' || output5 == 'Perk') {

      var m4Final5 = mk2Perk[Math.floor(Math.random() * mk2Perk.length)];
      document.querySelector('#primary5').innerHTML = m4Final5;

    }
    // Is Laser Included?
    if (output1 == 'Laser' || output2 == 'Laser' || output3 == 'Laser' || output4 == 'Laser' || output5 == 'Laser') {

      var m4Final6 = mk2Laser[Math.floor(Math.random() * mk2Laser.length)];
      document.querySelector('#primary6').innerHTML = m4Final6;

    }
    // Is Underbarrel Included?
    if (output1 == 'Underbarrel' || output2 == 'Underbarrel' || output3 == 'Underbarrel' || output4 == 'Underbarrel' || output5 == 'Underbarrel') {

      var m4Final7 = mk2Underbarrel[Math.floor(Math.random() * mk2Underbarrel.length)];
      document.querySelector('#primary7').innerHTML = m4Final7;

    }
    // Is Ammunition Included?
    if (output1 == 'Ammunition' || output2 == 'Ammunition' || output3 == 'Ammunition' || output4 == 'Ammunition' || output5 == 'Ammunition') {

      var m4Final8 = mk2Ammunition[Math.floor(Math.random() * mk2Ammunition.length)];
      document.querySelector('#primary8').innerHTML = m4Final8;

    }
    // Is Rear Grip Included?
    if (output1 == 'Rear Grip' || output2 == 'Rear Grip' || output3 == 'Rear Grip' || output4 == 'Rear Grip' || output5 == 'Rear Grip') {

      var m4Final9 = mk2RearGrip[Math.floor(Math.random() * mk2RearGrip.length)];
      document.querySelector('#primary9').innerHTML = m4Final9;

    }
  }

  // Here the same happens, just with the secondary weapons now

  // Random Output 1
  secondOutput1 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];



  // Random Output 2
  secondOutput2 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];

  while (secondOutput1 == secondOutput2) {
    secondOutput2 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];
  }


  // Random Output 3
  secondOutput3 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];

  while (secondOutput3 == secondOutput1 || secondOutput3 == secondOutput2) {
    secondOutput3 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];
  }


  // Random Output 4
  secondOutput4 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];

  while (secondOutput4 == secondOutput1 || secondOutput4 == secondOutput2 || secondOutput4 == secondOutput3) {
    secondOutput4 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];
  }


  // Random Output 5
  secondOutput5 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];

  while (secondOutput5 == secondOutput1 || secondOutput5 == secondOutput2 || secondOutput5 == output3 || secondOutput5 == secondOutput4) {
    secondOutput5 = secondarySlots[Math.floor(Math.random() * secondarySlots.length)];
  }



  // Checks if J358 is in outputSecondary
  if (outputSecondary == 'PISTOL - J358') {

    // Is Muzzle Included?
    if (secondOutput1 == 'Muzzle' || secondOutput2 == 'Muzzle' || secondOutput3 == 'Muzzle' || secondOutput4 == 'Muzzle' || secondOutput5 == 'Muzzle') {

      var j358Final1 = j358Muzzle[Math.floor(Math.random() * j358Muzzle.length)];
      document.querySelector('#secondary1').innerHTML = j358Final1;

    }
    // Is Barrel Included?
    if (secondOutput1 == 'Barrel' || secondOutput2 == 'Barrel' || secondOutput3 == 'Barrel' || secondOutput4 == 'Barrel' || secondOutput5 == 'Barrel') {

      var j358Final2 = j358Barrel[Math.floor(Math.random() * j358Barrel.length)];
      document.querySelector('#secondary2').innerHTML = j358Final2;

    }
    // Is Optic Included?
    if (secondOutput1 == 'Optic' || secondOutput2 == 'Optic' || secondOutput3 == 'Optic' || secondOutput4 == 'Optic' || secondOutput5 == 'Optic') {

      var j358Final3 = j358Optic[Math.floor(Math.random() * j358Optic.length)];
      document.querySelector('#secondary3').innerHTML = j358Final3;

    }
    // Is Stock Included?
    if (secondOutput1 == 'Stock' || secondOutput2 == 'Stock' || secondOutput3 == 'Stock' || secondOutput4 == 'Stock' || secondOutput5 == 'Stock') {

      var j358Final4 = j358Stock[Math.floor(Math.random() * j358Stock.length)];
      document.querySelector('#secondary4').innerHTML = j358Final4;

    }
    // Is Perk Included?
    if (secondOutput1 == 'Perk' || secondOutput2 == 'Perk' || secondOutput3 == 'Perk' || secondOutput4 == 'Perk' || secondOutput5 == 'Perk') {

      var j358Final5 = j358Perk[Math.floor(Math.random() * j358Perk.length)];
      document.querySelector('#secondary5').innerHTML = j358Final5;

    }
    // Is Laser Included?
    if (secondOutput1 == 'Laser' || secondOutput2 == 'Laser' || secondOutput3 == 'Laser' || secondOutput4 == 'Laser' || secondOutput5 == 'Laser') {

      var j358Final6 = j358Laser[Math.floor(Math.random() * j358Laser.length)];
      document.querySelector('#secondary6').innerHTML = j358Final6;

    }
    // Is Underbarrel Included?
    if (secondOutput1 == 'Underbarrel' || secondOutput2 == 'Underbarrel' || secondOutput3 == 'Underbarrel' || secondOutput4 == 'Underbarrel' || secondOutput5 == 'Underbarrel') {

      var j358Final7 = j358Underbarrel[Math.floor(Math.random() * j358Underbarrel.length)];
      document.querySelector('#secondary7').innerHTML = j358Final7;

    }
    // Is Ammunition Included?
    if (secondOutput1 == 'Ammunition' || secondOutput2 == 'Ammunition' || secondOutput3 == 'Ammunition' || secondOutput4 == 'Ammunition' || secondOutput5 == 'Ammunition') {

      var j358Final8 = j358Ammunition[Math.floor(Math.random() * j358Ammunition.length)];
      document.querySelector('secondary8').innerHTML = j358Final8;

    }
    // Is Rear Grip Included?
    if (secondOutput1 == 'Rear Grip' || secondOutput2 == 'Rear Grip' || secondOutput3 == 'Rear Grip' || secondOutput4 == 'Rear Grip' || secondOutput5 == 'Rear Grip') {

      var j358Final9 = j358RearGrip[Math.floor(Math.random() * j358RearGrip.length)];
      document.querySelector('#secondary9').innerHTML = j358Final9;

    }
  } else if (outputSecondary == 'PISTOL - MW11') {

    // Is Muzzle Included?
    if (secondOutput1 == 'Muzzle' || secondOutput2 == 'Muzzle' || secondOutput3 == 'Muzzle' || secondOutput4 == 'Muzzle' || secondOutput5 == 'Muzzle') {

      var j358Final1 = mw11Muzzle[Math.floor(Math.random() * mw11Muzzle.length)];
      document.querySelector('#secondary1').innerHTML = j358Final1;

    }
    // Is Barrel Included?
    if (secondOutput1 == 'Barrel' || secondOutput2 == 'Barrel' || secondOutput3 == 'Barrel' || secondOutput4 == 'Barrel' || secondOutput5 == 'Barrel') {

      var j358Final2 = mw11Barrel[Math.floor(Math.random() * mw11Barrel.length)];
      document.querySelector('#secondary2').innerHTML = j358Final2;

    }
    // Is Optic Included?
    if (secondOutput1 == 'Optic' || secondOutput2 == 'Optic' || secondOutput3 == 'Optic' || secondOutput4 == 'Optic' || secondOutput5 == 'Optic') {

      var j358Final3 = mw11Optic[Math.floor(Math.random() * mw11Optic.length)];
      document.querySelector('#secondary3').innerHTML = j358Final3;

    }
    // Is Stock Included?
    if (secondOutput1 == 'Stock' || secondOutput2 == 'Stock' || secondOutput3 == 'Stock' || secondOutput4 == 'Stock' || secondOutput5 == 'Stock') {

      var j358Final4 = mw11Stock[Math.floor(Math.random() * mw11Stock.length)];
      document.querySelector('#secondary3').innerHTML = j358Final4;

    }
    // Is Perk Included?
    if (secondOutput1 == 'Perk' || secondOutput2 == 'Perk' || secondOutput3 == 'Perk' || secondOutput4 == 'Perk' || secondOutput5 == 'Perk') {

      var j358Final5 = mw11Perk[Math.floor(Math.random() * mw11Perk.length)];
      document.querySelector('#secondary5').innerHTML = j358Final5;

    }
    // Is Laser Included?
    if (secondOutput1 == 'Laser' || secondOutput2 == 'Laser' || secondOutput3 == 'Laser' || secondOutput4 == 'Laser' || secondOutput5 == 'Laser') {

      var j358Final6 = mw11Laser[Math.floor(Math.random() * mw11Laser.length)];
      document.querySelector('#secondary6').innerHTML = j358Final6;

    }
    // Is Underbarrel Included?
    if (secondOutput1 == 'Underbarrel' || secondOutput2 == 'Underbarrel' || secondOutput3 == 'Underbarrel' || secondOutput4 == 'Underbarrel' || secondOutput5 == 'Underbarrel') {

      var j358Final7 = mw11Underbarrel[Math.floor(Math.random() * mw11Underbarrel.length)];
      document.querySelector('#secondary7').innerHTML = j358Final7;

    }
    // Is Ammunition Included?
    if (secondOutput1 == 'Ammunition' || secondOutput2 == 'Ammunition' || secondOutput3 == 'Ammunition' || secondOutput4 == 'Ammunition' || secondOutput5 == 'Ammunition') {

      var j358Final8 = mw11Ammunition[Math.floor(Math.random() * mw11Ammunition.length)];
      document.querySelector('#secondary8').innerHTML = j358Final8;

    }
    // Is Rear Grip Included?
    if (secondOutput1 == 'Rear Grip' || secondOutput2 == 'Rear Grip' || secondOutput3 == 'Rear Grip' || secondOutput4 == 'Rear Grip' || secondOutput5 == 'Rear Grip') {

      var j358Final9 = mw11RearGrip[Math.floor(Math.random() * mw11RearGrip.length)];
      document.querySelector('#secondary9').innerHTML = j358Final9;

    }
  } else if (outputSecondary == 'PISTOL - .50 GS') {

    // Is Muzzle Included?
    if (secondOutput1 == 'Muzzle' || secondOutput2 == 'Muzzle' || secondOutput3 == 'Muzzle' || secondOutput4 == 'Muzzle' || secondOutput5 == 'Muzzle') {

      var j358Final1 = gs50Muzzle[Math.floor(Math.random() * gs50Muzzle.length)];
      document.querySelector('#secondary1').innerHTML = j358Final1;

    }
    // Is Barrel Included?
    if (secondOutput1 == 'Barrel' || secondOutput2 == 'Barrel' || secondOutput3 == 'Barrel' || secondOutput4 == 'Barrel' || secondOutput5 == 'Barrel') {

      var j358Final2 = gs50Barrel[Math.floor(Math.random() * gs50Barrel.length)];
      document.querySelector('#secondary2').innerHTML = j358Final2;

    }
    // Is Optic Included?
    if (secondOutput1 == 'Optic' || secondOutput2 == 'Optic' || secondOutput3 == 'Optic' || secondOutput4 == 'Optic' || secondOutput5 == 'Optic') {

      var j358Final3 = gs50Optic[Math.floor(Math.random() * gs50Optic.length)];
      document.querySelector('#secondary3').innerHTML = j358Final3;

    }
    // Is Stock Included?
    if (secondOutput1 == 'Stock' || secondOutput2 == 'Stock' || secondOutput3 == 'Stock' || secondOutput4 == 'Stock' || secondOutput5 == 'Stock') {

      var j358Final4 = gs50Stock[Math.floor(Math.random() * gs50Stock.length)];
      document.querySelector('#secondary4').innerHTML = j358Final4;

    }
    // Is Perk Included?
    if (secondOutput1 == 'Perk' || secondOutput2 == 'Perk' || secondOutput3 == 'Perk' || secondOutput4 == 'Perk' || secondOutput5 == 'Perk') {

      var j358Final5 = gs50Perk[Math.floor(Math.random() * gs50Perk.length)];
      document.querySelector('#secondary5').innerHTML = j358Final5;

    }
    // Is Laser Included?
    if (secondOutput1 == 'Laser' || secondOutput2 == 'Laser' || secondOutput3 == 'Laser' || secondOutput4 == 'Laser' || secondOutput5 == 'Laser') {

      var j358Final6 = gs50Laser[Math.floor(Math.random() * gs50Laser.length)];
      document.querySelector('#secondary6').innerHTML = j358Final6;

    }
    // Is Underbarrel Included?
    if (secondOutput1 == 'Underbarrel' || secondOutput2 == 'Underbarrel' || secondOutput3 == 'Underbarrel' || secondOutput4 == 'Underbarrel' || secondOutput5 == 'Underbarrel') {

      var j358Final7 = gs50Underbarrel[Math.floor(Math.random() * gs50Underbarrel.length)];
      document.querySelector('#secondary7').innerHTML = j358Final7;

    }
    // Is Ammunition Included?
    if (secondOutput1 == 'Ammunition' || secondOutput2 == 'Ammunition' || secondOutput3 == 'Ammunition' || secondOutput4 == 'Ammunition' || secondOutput5 == 'Ammunition') {

      var j358Final8 = gs50Ammunition[Math.floor(Math.random() * gs50Ammunition.length)];
      document.querySelector('#secondary8').innerHTML = j358Final8;

    }
    // Is Rear Grip Included?
    if (secondOutput1 == 'Rear Grip' || secondOutput2 == 'Rear Grip' || secondOutput3 == 'Rear Grip' || secondOutput4 == 'Rear Grip' || secondOutput5 == 'Rear Grip') {

      var j358Final9 = gs50RearGrip[Math.floor(Math.random() * gs50RearGrip.length)];
      document.querySelector('#secondary9').innerHTML = j358Final9;

    }
  } else if (outputSecondary == 'PISTOL - Renetti') {

    // Is Muzzle Included?
    if (secondOutput1 == 'Muzzle' || secondOutput2 == 'Muzzle' || secondOutput3 == 'Muzzle' || secondOutput4 == 'Muzzle' || secondOutput5 == 'Muzzle') {

      var j358Final1 = renettiMuzzle[Math.floor(Math.random() * renettiMuzzle.length)];
      document.querySelector('#secondary1').innerHTML = j358Final1;

    }
    // Is Barrel Included?
    if (secondOutput1 == 'Barrel' || secondOutput2 == 'Barrel' || secondOutput3 == 'Barrel' || secondOutput4 == 'Barrel' || secondOutput5 == 'Barrel') {

      var j358Final2 = renettiBarrel[Math.floor(Math.random() * renettiBarrel.length)];
      document.querySelector('#secondary2').innerHTML = j358Final2;

    }
    // Is Optic Included?
    if (secondOutput1 == 'Optic' || secondOutput2 == 'Optic' || secondOutput3 == 'Optic' || secondOutput4 == 'Optic' || secondOutput5 == 'Optic') {

      var j358Final3 = renettiOptic[Math.floor(Math.random() * renettiOptic.length)];
      document.querySelector('#secondary3').innerHTML = j358Final3;

    }
    // Is Stock Included?
    if (secondOutput1 == 'Stock' || secondOutput2 == 'Stock' || secondOutput3 == 'Stock' || secondOutput4 == 'Stock' || secondOutput5 == 'Stock') {

      var j358Final4 = renettiStock[Math.floor(Math.random() * renettiStock.length)];
      document.querySelector('#secondary3').innerHTML = j358Final4;

    }
    // Is Perk Included?
    if (secondOutput1 == 'Perk' || secondOutput2 == 'Perk' || secondOutput3 == 'Perk' || secondOutput4 == 'Perk' || secondOutput5 == 'Perk') {

      var j358Final5 = renettiPerk[Math.floor(Math.random() * renettiPerk.length)];
      document.querySelector('#secondary5').innerHTML = j358Final5;

    }
    // Is Laser Included?
    if (secondOutput1 == 'Laser' || secondOutput2 == 'Laser' || secondOutput3 == 'Laser' || secondOutput4 == 'Laser' || secondOutput5 == 'Laser') {

      var j358Final6 = renettiLaser[Math.floor(Math.random() * renettiLaser.length)];
      document.querySelector('#secondary6').innerHTML = j358Final6;

    }
    // Is Underbarrel Included?
    if (secondOutput1 == 'Underbarrel' || secondOutput2 == 'Underbarrel' || secondOutput3 == 'Underbarrel' || secondOutput4 == 'Underbarrel' || secondOutput5 == 'Underbarrel') {

      var j358Final7 = renettiUnderbarrel[Math.floor(Math.random() * renettiUnderbarrel.length)];
      document.querySelector('#secondary7').innerHTML = j358Final7;

    }
    // Is Ammunition Included?
    if (secondOutput1 == 'Ammunition' || secondOutput2 == 'Ammunition' || secondOutput3 == 'Ammunition' || secondOutput4 == 'Ammunition' || secondOutput5 == 'Ammunition') {

      var j358Final8 = renettiAmmunition[Math.floor(Math.random() * renettiAmmunition.length)];
      document.querySelector('#secondary8').innerHTML = j358Final8;

    }
    // Is Rear Grip Included?
    if (secondOutput1 == 'Rear Grip' || secondOutput2 == 'Rear Grip' || secondOutput3 == 'Rear Grip' || secondOutput4 == 'Rear Grip' || secondOutput5 == 'Rear Grip') {

      var j358Final9 = renettiRearGrip[Math.floor(Math.random() * renettiRearGrip.length)];
      document.querySelector('#secondary9').innerHTML = j358Final9;

    }
  }
}
// Liefe Sutliff (11/4/2021)