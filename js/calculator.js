const masterycoef = {
  "warrior-arms": "1.1",
  "warrior-fury": "1.3999999",
  "warrior-protection": "1.5",
  "hunter-marksmanship": "0.625",
  "hunter-beastmastery": "1.8999999",
  "hunter-survival": "1.6499999",
  "priest-discipline": "1.35",
  "priest-holy": "1.25",
  "priest-shadow": "0.5",
  "mage-arcane": "1.2",
  "mage-fire": "0.75",
  "mage-frostM": "1",
  "monk-brewmaster": "1",
  "monk-mistweaver": "4.1999998",
  "monk-windwalker": "1.25",
  "demonhunter-havoc": "3",
  "demonhunter-vengeance": "1.7999999",
  "paladin-holy": "1.5",
  "paladin-retribution": "1.6",
  "paladin-protection": "1",
  "rogue-assasination": "1.7",
  "rogue-subtlety": "2.45",
  "rogue-outlaw": "1.45",
  "shaman-elemental": "1.875",
  "shaman-enhancement": "2",
  "shaman-restoration": "3",
  "warlock-affliction": "2.5",
  "warlock-demonology": "2",
  "warlock-destruction": "1.45",
  "druid-balance": "1.1",
  "druid-feral": "2",
  "druid-restoration": "0.5",
  "druid-guardian": "0.5",
  "deathknight-blood": "2",
  "deathknight-frostD": "2",
  "deathknight-unholy": "1.7999999"
};
const bonuscritical = {
  "warrior-arms": "5",
  "warrior-fury": "5",
  "warrior-protection": "5",
  "hunter-marksmanship": "10",
  "hunter-beastmastery": "10",
  "hunter-survival": "10",
  "priest-discipline": "0",
  "priest-holy": "0",
  "priest-shadow": "0",
  "mage-arcane": "0",
  "mage-fire": "0",
  "mage-frost": "0",
  "monk-brewmaster": "10",
  "monk-mistweaver": "10",
  "monk-windwalker": "10",
  "demonhunter-havoc": "10",
  "demonhunter-vengeance": "10",
  "paladin-holy": "0",
  "paladin-retribution": "5",
  "paladin-protection": "5",
  "rogue-assasination": "10",
  "rogue-subtlety": "10",
  "rogue-outlaw": "10",
  "shaman-elemental": "0",
  "shaman-enhancement": "10",
  "shaman-restoration": "0",
  "warlock-affliction": "0",
  "warlock-demonology": "0",
  "warlock-destruction": "0",
  "druid-balance": "0",
  "druid-feral": "10",
  "druid-restoration": "0",
  "druid-guardian": "10",
  "deathknight-blood": "5",
  "deathknight-frost": "5",
  "deathknight-unholy": "5"
};
let RatioStats = [[0, 3.091154721, 3.091154721, 3.091154721, 3.091154721, 3.091154721, 3.091154721, 3.091154721, 3.091154721, 3.091154721, 3.091154721, //0-10 Vers
3.091154721, 3.245712457, 3.400270193, 3.554827929, 3.709385665, 3.863943401, 4.018501137, 4.173058873, 4.327616609, 4.482174345, //11-20 Vers
4.636732081, 4.791289817, 4.945847553, 5.100405289, 5.254963025, 5.414083305, 5.579537691, 5.751610634, 5.930600757, 6.11682162, //21-30 Vers
6.310602529, 6.512289386, 6.722245596, 6.940853023, 7.168513002, 7.405647412, 7.65269981, 7.910136631, 8.178448466, 8.458151403, //31-40 Vers 
8.773380327, 9.100357595, 9.439521059, 9.79132489, 10.15624018, 10.5347556, 10.92737799, 11.33463313, 11.75706636, 12.19524335, //41-50 Vers
13.46417035, 14.86513044, 16.4118618, 18.11953208, 20.00488711, 22.08641518, 24.38452828, 26.92176229, 29.72299799, 40.0000001 //51-60 Vers
],[0, 2.704760381, 2.704760381, 2.704760381, 2.704760381, 2.704760381, 2.704760381, 2.704760381, 2.704760381, 2.704760381,2.704760381, //0-10 Crit
2.704760381, 2.8399984, 2.975236419, 3.110474438, 3.245712457, 3.380950476, 3.516188495, 3.651426514, 3.786664533, 3.921902552, //11-20 Crit 
4.057140571, 4.19237859, 4.327616609, 4.462854628, 4.598092647, 4.737322892, 4.88209548, 5.032659304, 5.189275662, 5.352218918, //21-30 Crit
5.521777213, 5.698253213, 5.881964896, 6.073246395, 6.272448877, 6.479941485, 6.696112333, 6.921369552, 7.156142407, 7.400882478, //31-40 Crit 
7.676707786, 7.962812896, 8.259580927, 8.567409279, 8.886710161, 9.217911147, 9.561455743, 9.917803988, 10.28743306, 10.67083793, //41-50 Crit
11.78114906, 13.00698914, 14.36037908, 15.85459057, 17.50427622, 19.32561328, 21.33646224, 23.55654201, 26.00762324, 35.00000009//51-60 Crit 
],[
  0, 2.550202644, 2.550202644, 2.550202644, 2.550202644, 2.550202644, 2.550202644, 2.550202644, 2.550202644, 2.550202644, 2.550202644, //0-10 Haste
     2.550202644, 2.677712777, 2.805222909, 2.932733041, 3.060243173, 3.187753306, 3.315263438, 3.44277357, 3.570283702, 3.697793835, //11-20 Haste
     3.825303967, 3.952814099, 4.080324231, 4.207834363, 4.335344496, 4.466618727, 4.603118595, 4.745078773, 4.892745624, 5.046377837, //21-30 Haste
     5.206247087, 5.372638744, 5.545852617, 5.726203744, 5.914023226, 6.109659115, 6.313477343, 6.525862721, 6.747219984, 6.977974908, //31-40 Haste
     7.23803877, 7.507795016, 7.787604874, 8.077843034, 8.378898152, 8.691173367, 9.015086844, 9.351072331, 9.699579745, 10.06107577, //41-50 Haste 
     11.10794054, 12.26373262, 13.53978599, 14.94861396, 16.50403187, 18.22129252, 20.11723583, 22.21045389, 24.52147334, 33.00000009 //51-60 Haste
],]; 
let RatioSpeed = [
  0, 0.77278868, 0.77278868, 0.77278868, 0.77278868, 0.77278868, 0.77278868, 0.77278868, 0.77278868, 0.77278868, 0.77278868,
                     0.77278868, 0.811428114, 0.850067548, 0.888706982, 0.927346416, 0.96598585, 1.004625284, 1.043264718, 1.081904152, 1.120543586,
                     1.15918302, 1.197822454, 1.236461888, 1.275101322, 1.313740756, 1.353520826, 1.394884423, 1.437902658, 1.482650189, 1.529205405,
                     1.577650632, 1.628072347, 1.680561399, 1.735213256, 1.79212825, 1.851411853, 1.913174952, 1.977534158, 2.044612116, 2.114537851,
                     2.193345082, 2.275089399, 2.359880265, 2.447831223, 2.539060046, 2.633688899, 2.731844498, 2.833658282, 2.939266589, 3.048810838,
                     3.366042588, 3.716282611, 4.102965451, 4.529883019, 5.001221777, 5.521603794, 6.096132069, 6.730440573, 7.430749497, 10.00000003 
                    ];
let RatioLeech = [
  0, 1.622856228, 1.622856228, 1.622856228, 1.622856228, 1.622856228, 1.622856228, 1.622856228, 1.622856228, 1.622856228, 1.622856228,
                     1.622856228, 1.70399904, 1.785141851, 1.866284663, 1.947427474, 2.028570285, 2.109713097, 2.190855908, 2.27199872, 2.353141531,
                     2.434284342, 2.515427154, 2.596569965, 2.677712777, 2.758855588, 2.842393735, 2.929257288, 3.019595583, 3.113565397, 3.211331351,
                     3.313066328, 3.418951928, 3.529178938, 3.643947837, 3.763469326, 3.887964891, 4.0176674, 4.152821731, 4.293685444, 4.440529487,
                     4.606024672, 4.777687737, 4.955748556, 5.140445567, 5.332026097, 5.530746688, 5.736873446, 5.950682393, 6.172459837, 6.40250276,
                     7.068689434, 7.804193483, 8.616227447, 9.51275434, 10.50256573, 11.59536797, 12.80187735, 14.1339252, 15.60457394, 21.00000006 
                    ];
let RatioAvoidance = [
0, 1.081904152, 1.081904152, 1.081904152, 1.081904152, 1.081904152, 1.081904152, 1.081904152, 1.081904152, 1.081904152, 1.081904152,
                        1.081904152, 1.13599936, 1.190094567, 1.244189775, 1.298284983, 1.35238019, 1.406475398, 1.460570605, 1.514665813, 1.568761021,
                        1.622856228, 1.676951436, 1.731046644, 1.785141851, 1.839237059, 1.894929157, 1.952838192, 2.013063722, 2.075710265, 2.140887567,
                        2.208710885, 2.279301285, 2.352785959, 2.429298558, 2.508979551, 2.591976594, 2.678444933, 2.768547821, 2.862456963, 2.960352991,
                        3.070683114, 3.185125158, 3.303832371, 3.426963712, 3.554684064, 3.687164459, 3.824582297, 3.967121595, 4.114973225, 4.268335174,
                        4.712459623, 5.202795655, 5.744151632, 6.341836227, 7.001710488, 7.730245312, 8.534584897, 9.422616802, 10.4030493, 14.00000004 
                      ];
let mastery = "";
function selectSpec(e){
  document.getElementsByClassName("spell_block")[0].style.display = "flex";
  //let el = document.getElementsByClassName("Input")[0].classList.add("borderbetween");
  document.getElementsByClassName("calculator")[0].style.maxWidth = "420px";
  document.getElementsByClassName("calculator")[0].style.minheight = "300px";
  mastery = e.value;
  el = document.getElementsByClassName('InputField');    
  for(let i = 0 ; i < el.length;i++){
    el[i].style.display = "block"
  }
  el = document.getElementsByClassName("base_spec");
  for(let i = 1 ; i < el.length; i++){
    if(el[i].className == "base_spec " + mastery + " borderbetween" || el[i].className == "base_spec " + mastery){
      el[i].style.display = "flex";
      el[i].classList.remove("borderbetween");
    }
    else {
      el[i].style.display = "none";
    }
  }
  document.getElementById("MasteryResult").value = (8.00*masterycoef[mastery]).toFixed(2) + "%";   
  document.getElementById("CriticalResult").value = parseInt(bonuscritical[mastery]).toFixed(2) + "%";  
}
function inputStats(id){
  var stat = Number(document.getElementById(id).value);
  if(id == "Level"){
    inputStats('Versatility');
    inputStats('Critical');
    inputStats('Haste');
    inputStats('Mastery');
    calculatespells();
    return;
  }
  var temp;
  var Lvl = Number(document.getElementById('Level').value);
  switch(id){
    case 'Versatility':
      temp = 0;
      break;
    case 'Critical':
      temp = 1;
      break;
    case 'Haste':
      temp = 2;
      break;
    case 'Mastery':
      temp = 1;
      break;
  }
  var Ratio = Number(1.0/RatioStats[temp][Lvl]);
  var dim = 30/Ratio;
  var result = Number(0);
  var flag = false;
  if (stat < dim && stat > 0 && flag == false)
  {
    result = Number(stat*Ratio);
    flag = true;
  }
  if(stat > dim && stat < (dim + (9.0/(Ratio*0.9))) && flag == false)
  {
    result = Number(30.0 + (stat-dim)*(Ratio*0.9))
    flag = true;
  }
  else if(flag == 0)
    dim += 9.0/(Ratio*0.9);
  if(stat > dim && stat < dim + 8.0/(Ratio*0.8) && flag == false)
  {
    result = Number(39.0 + (stat-dim)*(Ratio*0.8))
    flag = true;
  }
  else if(flag == 0)
    dim += 8.0/(Ratio*0.8);
  if(stat > dim && stat < dim + 7.0/(Ratio*0.7) && flag == false)
  {
    result = Number(47.0 + (stat-dim)*(Ratio*0.7))
    flag = true;
  }
  else if(flag == 0)
    dim += 7.0/(Ratio*0.7);
  if(stat > dim && stat < dim + 12.0/(Ratio*0.6) && flag == false)
  {
    result = Number(54.0 + (stat-dim)*(Ratio*0.6))
    flag = true;
  }
  else if(flag == 0)
    dim += 12.0/(Ratio*0.6);
  if(stat > dim && flag == 0)
    result = Number(66.0 + (stat-dim)*(Ratio*0.5));
  if (id != 'Mastery' && result > 120)
    result = 120;
  if (id == 'Mastery')
    result = (result+8)*masterycoef[mastery];
  if(id == "Critical")
  {
    result += parseInt(bonuscritical[mastery]); 
  }
  id = id + "Result";
  flag = false;
  document.getElementById(id).value = result.toFixed(2) + "%";
}
