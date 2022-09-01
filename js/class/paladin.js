let coef = 0;
let spec = "";
let versvalue = 0;
let apvalue = 0;
let levelvalue = 0;
function crusaderstrike()
{
  let rtrn = apvalue * 0.765*(1+versvalue);
  if(levelvalue >= 10)
    rtrn *= coef;
  if(spec == "paladin-holy")
    rtrn *= 1.04;
  document.getElementsByName("crusader strike")[0].value = rtrn.toFixed(2);
}
function SotR()
{
  let rtrn = 0;
  if(levelvalue >= 2)
  {
    rtrn = apvalue * 0.425*(1+versvalue);
    if(levelvalue >= 10)
      rtrn *= coef;
    if(spec == "paladin-holy")
      rtrn *= 1.04;
    if(spec == "paladin-retribution")
      rtrn *= (1+parseFloat(document.getElementById("MasteryResult").value)/100.0);
  }
  document.getElementById("shield of the righteous").value = rtrn.toFixed(2);
}
function judgment()
{
  let rtrn = 0;
  if(levelvalue >= 3)
  {
    rtrn = apvalue * (1+versvalue);
    if(levelvalue >= 8)
      rtrn *= 1.5;
    if(levelvalue >= 10)
    {
    switch(spec){
      case "paladin-holy":
        rtrn *= 0.74; // another spec multiplier
        rtrn *= 1.125; // spec multiplier
        rtrn *= 1.04; // from sp to ap
        break;
      case "paladin-retribution":
        rtrn *= 0.634;
        rtrn *= coef*(1+parseFloat(document.getElementById("MasteryResult").value)/100.0)* 0.96;
        break;
      case "paladin-protection":
        rtrn *= 1.125;
        rtrn *= 0.73;
        rtrn *= 1.01;
        break;
    } 
  }
  document.getElementById("judgment").value = rtrn.toFixed(2);
}
}
function flashoflight()
{
  let rtrn = 0;
  if(levelvalue >=4)
  {
    rtrn = 2.02 * (1+versvalue) * apvalue;
    if(spec == "paladin-retribution")
      rtrn *= 0.96;
    if(spec == "paladin-protection")
      rtrn *= 1.01;
  if(levelvalue >=10)
  {
    switch(spec){
    case "paladin-holy":
      rtrn *= 1.06 * (1+parseFloat(document.getElementById("MasteryResult").value)/100.0);
      break;
    case "paladin-retribution":
    case "paladin-protection":
      rtrn *= 1.39;
      break;
  }
  }
  }
  document.getElementById("flash of light").value = rtrn.toFixed(2);
}
function consecration()
{
  let rtrn = 0;
  if(levelvalue >= 6)
  {
    rtrn = apvalue * 0.05 *(1+versvalue);
    if(levelvalue >= 10)
    {
    if(spec == "paladin-holy")
      rtrn *=2.1;
    }
  rtrn *= parseInt(12/(1/(1 + parseFloat(document.getElementById("HasteResult").value)/100.0)));
  }
  document.getElementById("consecration").value = rtrn.toFixed(2);
}
function wordofglory()
{
  let rtrn = 0
  if(levelvalue >= 7)
  {
    rtrn =  3.15*apvalue*(1+versvalue);
    switch(spec){
      case "paladin-holy":
        rtrn *= (1+parseFloat(document.getElementById("MasteryResult").value)/100.0) * 1.06;
        break;
      case "paladin-retribution":
        rtrn *= 1.2*0.96;
        break;
      case "paladin-protection":
        rtrn *= 1.01;
    }
  }
  document.getElementById("word of glory").value = rtrn.toFixed(2);
}
function hammerofwrath()
{
  let rtrn = 0;
  if(levelvalue >= 46)
  {
    rtrn = apvalue * 1.2 * (1+versvalue) * coef;
    if(spec == "paladin-retribution")
      rtrn *= (1+parseFloat(document.getElementById("MasteryResult").value)/100.0);
    if(spec == "paladin-holy")
      rtrn *= 0.8;
  }
  document.getElementById("hammer of wrath").value = rtrn.toFixed(2);
}
function holyshock()
{
  if(levelvalue >= 10)
  {
    document.getElementsByName("holy shockD")[0].value = (apvalue * 0.68*coef*(1+versvalue)).toFixed(2);
    document.getElementsByName("holy shockH")[0].value = (apvalue * 1.55*1.06*(1+versvalue)*(1+parseFloat(document.getElementById("MasteryResult").value)/100.0)).toFixed(2);
  }
}
function holylight()
{
  if(levelvalue >=11)
    document.getElementById("holy light").value = (2.6*apvalue * (1+versvalue) * 1.06*(1+parseFloat(document.getElementById("MasteryResult").value)/100.0)).toFixed(2);
}
function lotm()
{
  if(levelvalue >=27)
    document.getElementById("light of the martyr").value = (2.1*apvalue * (1+versvalue) * 1.06*(1+parseFloat(document.getElementById("MasteryResult").value)/100.0)).toFixed(2);
}
function lightofdawn()
{
  if(levelvalue >=34)
    document.getElementById("light of dawn").value = (1.05*apvalue * (1+versvalue) * 1.06*(1+parseFloat(document.getElementById("MasteryResult").value)/100.0)).toFixed(2);
}
function calculatespells()
{
  levelvalue = parseInt(document.getElementById("Level").value);
  spec = document.getElementById("spec").value;
  versvalue = parseFloat(document.getElementById("VersatilityResult").value)/100.0;
  apvalue = parseFloat(document.getElementById("AttackPower").value);
  if(spec == "paladin-protection" && levelvalue >= 10)
  {
    apvalue *= (1+parseFloat(document.getElementById("MasteryResult").value)/100.0);
  }
  if(parseFloat(document.getElementById("MHDPS").value) != 0)
  {
    apvalue +=parseFloat(document.getElementById("MHDPS").value*6);
  }
  else if(spec != "paladin-holy")
  {
    apvalue += 3;
  }
  
  if(spec != "paladin-holy")
  {
    document.getElementById("MHText").innerHTML = "MH";
    document.getElementById("MHDPS").style.display = "";
    document.getElementById("spec").style.marginBottom = "5px";
    document.getElementById("APText").innerHTML = "Attack Power";
  }
  else
  {
    document.getElementById("spec").style.marginBottom = "47px";
    document.getElementById("MHText").innerHTML = "";
    document.getElementById("MHDPS").style.display = "none";
    document.getElementById("APText").innerHTML = "Spell Power";
  }
  switch(spec){
    case "paladin-holy":
      coef = 0.92;
      holyshock();
      holylight();
      lotm();
      lightofdawn();
      break;
    case "paladin-retribution":
      coef = 0.76;
      break;
    case "paladin-protection":
      coef = 1.04;
      break;
  }
  if(levelvalue >= 15 && spec == "paladin-protection")
  {
    document.getElementById("crusader strike").style.display = "none";
  }
  else
  {
    document.getElementById("crusader strike").style.display = "block";
    crusaderstrike();
  }
  SotR();
  judgment();
  flashoflight();
  consecration();
  wordofglory();
  hammerofwrath();
}
