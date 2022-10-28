import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

function DiseasePredictor() {
  const symptoms = [
    "abdomen acute",
    "abdominal bloating",
    "abdominal tenderness",
    "abnormal sensation",
    "abnormally hard consistency",
    "abortion",
    "abscess bacterial",
    "absences finding",
    "achalasia",
    "ache",
    "adverse effect",
    "adverse reaction",
    "agitation",
    "air fluid level",
    "alcohol binge episode",
    "alcoholic withdrawal symptoms",
    "ambidexterity",
    "angina pectoris",
    "anorexia",
    "anosmia",
    "aphagia",
    "apyrexial",
    "arthralgia",
    "ascites",
    "asterixis",
    "asthenia",
    "asymptomatic",
    "ataxia",
    "atypia",
    "aura",
    "awakening early",
    "barking cough",
    "bedridden",
    "behavior hyperactive",
    "behavior showing increased motor activity",
    "blackout",
    "blanch",
    "bleeding of vagina",
    "bowel sounds decreased",
    "bradycardia",
    "bradykinesia",
    "breakthrough pain",
    "breath sounds decreased",
    "breath-holding spell",
    "breech presentation",
    "bruit",
    "burning sensation",
    "cachexia",
    "cardiomegaly",
    "cardiovascular event",
    "cardiovascular finding",
    "catatonia",
    "catching breath",
    "charleyhorse",
    "chest discomfort",
    "chest tightness",
    "chill",
    "choke",
    "cicatrisation",
    "clammy skin",
    "claudication",
    "clonus",
    "clumsiness",
    "colic abdominal",
    "consciousness clear",
    "constipation",
    "coordination abnormal",
    "cough",
    "cushingoid facies",
    "cushingoid habitus",
    "cyanosis",
    "cystic lesion",
    "debilitation",
    "decompensation",
    "decreased body weight",
    "decreased stool caliber",
    "decreased translucency",
    "diarrhea",
    "difficulty",
    "difficulty passing urine",
    "disequilibrium",
    "distended abdomen",
    "distress respiratory",
    "disturbed family",
    "dizziness",
    "dizzy spells",
    "drool",
    "drowsiness",
    "dullness",
    "dysarthria",
    "dysdiadochokinesia",
    "dysesthesia",
    "dyspareunia",
    "dyspnea",
    "dyspnea on exertion",
    "dysuria",
    "ecchymosis",
    "egophony",
    "elation",
    "emphysematous change",
    "energy increased",
    "enuresis",
    "erythema",
    "estrogen use",
    "excruciating pain",
    "exhaustion",
    "extrapyramidal sign",
    "extreme exhaustion",
    "facial paresis",
    "fall",
    "fatigability",
    "fatigue",
    "fear of falling",
    "fecaluria",
    "feces in rectum",
    "feeling hopeless",
    "feeling strange",
    "feeling suicidal",
    "feels hot/feverish",
    "fever",
    "flare",
    "flatulence",
    "floppy",
    "flushing",
    "focal seizures",
    "food intolerance",
    "formication",
    "frail",
    "fremitus",
    "frothy sputum",
    "gag",
    "gasping for breath",
    "general discomfort",
    "general unsteadiness",
    "giddy mood",
    "gravida 0",
    "gravida 10",
    "green sputum",
    "groggy",
    "guaiac positive",
    "gurgle",
    "hacking cough",
    "haemoptysis",
    "haemorrhage",
    "hallucinations auditory",
    "hallucinations visual",
    "has religious belief",
    "headache",
    "heartburn",
    "heavy feeling",
    "heavy legs",
    "heberden's node",
    "hematochezia",
    "hematocrit decreased",
    "hematuria",
    "heme positive",
    "hemianopsia homonymous",
    "hemiplegia",
    "hemodynamically stable",
    "hepatomegaly",
    "hepatosplenomegaly",
    "hirsutism",
    "history of - blackout",
    "hoard",
    "hoarseness",
    "homelessness",
    "homicidal thoughts",
    "hot flush",
    "hunger",
    "hydropneumothorax",
    "hyperacusis",
    "hypercapnia",
    "hyperemesis",
    "hyperhidrosis disorder",
    "hyperkalemia",
    "hypersomnia",
    "hypersomnolence",
    "hypertonicity",
    "hyperventilation",
    "hypesthesia",
    "hypoalbuminemia",
    "hypocalcemia result",
    "hypokalemia",
    "hypokinesia",
    "hypometabolism",
    "hyponatremia",
    "hypoproteinemia",
    "hypotension",
    "hypothermia, natural",
    "hypotonic",
    "hypoxemia",
    "immobile",
    "impaired cognition",
    "inappropriate affect",
    "incoherent",
    "indifferent mood",
    "intermenstrual heavy bleeding",
    "intoxication",
    "irritable mood",
    "jugular venous distention",
    "labored breathing",
    "lameness",
    "large-for-dates fetus",
    "left atrial hypertrophy",
    "lesion",
    "lethargy",
    "lightheadedness",
    "lip smacking",
    "loose associations",
    "low back pain",
    "lung nodule",
    "macerated skin",
    "macule",
    "malaise",
    "mass in breast",
    "mass of body structure",
    "mediastinal shift",
    "mental status changes",
    "metastatic lesion",
    "milky",
    "moan",
    "monoclonal",
    "monocytosis",
    "mood depressed",
    "moody",
    "motor retardation",
    "murphy's sign",
    "muscle hypotonia",
    "muscle twitch",
    "myalgia",
    "mydriasis",
    "myoclonus",
    "nasal discharge present",
    "nasal flaring",
    "nausea",
    "nausea and vomiting",
    "neck stiffness",
    "neologism",
    "nervousness",
    "night sweat",
    "nightmare",
    "no known drug allergies",
    "no status change",
    "noisy respiration",
    "non-productive cough",
    "nonsmoker",
    "numbness",
    "numbness of hand",
    "oliguria",
    "orthopnea",
    "orthostasis",
    "out of breath",
    "overweight",
    "pain",
    "pain abdominal",
    "pain back",
    "pain chest",
    "pain foot",
    "pain in lower limb",
    "pain neck",
    "painful swallowing",
    "pallor",
    "palpitation",
    "panic",
    "pansystolic murmur",
    "para 1",
    "para 2",
    "paralyse",
    "paraparesis",
    "paresis",
    "paresthesia",
    "passed stones",
    "patient non compliance",
    "pericardial friction rub",
    "phonophobia",
    "photophobia",
    "photopsia",
    "pin-point pupils",
    "pleuritic pain",
    "pneumatouria",
    "polydypsia",
    "polymyalgia",
    "polyuria",
    "poor dentition",
    "poor feeding",
    "posterior rhinorrhea",
    "posturing",
    "presence of q wave",
    "pressure chest",
    "previous pregnancies 2",
    "primigravida",
    "prodrome",
    "productive cough",
    "projectile vomiting",
    "prostate tender",
    "prostatism",
    "proteinemia",
    "pruritus",
    "pulse absent",
    "pulsus paradoxus",
    "pustule",
    "qt interval prolonged",
    "r wave feature",
    "rale",
    "rambling speech",
    "rapid shallow breathing",
    "red blotches",
    "redness",
    "regurgitates after swallowing",
    "renal angle tenderness",
    "rest pain",
    "retch",
    "retropulsion",
    "rhd positive",
    "rhonchus",
    "rigor - temperature-associated observation",
    "rolling of eyes",
    "room spinning",
    "satiety early",
    "scar tissue",
    "sciatica",
    "scleral icterus",
    "scratch marks",
    "sedentary",
    "seizure",
    "sensory discomfort",
    "shooting pain",
    "shortness of breath",
    "side pain",
    "sinus rhythm",
    "sleeplessness",
    "sleepy",
    "slowing of urinary stream",
    "sneeze",
    "sniffle",
    "snore",
    "snuffle",
    "soft tissue swelling",
    "sore to touch",
    "spasm",
    "speech slurred",
    "splenomegaly",
    "spontaneous rupture of membranes",
    "sputum purulent",
    "st segment depression",
    "st segment elevation",
    "stahli's line",
    "stiffness",
    "stinging sensation",
    "stool color yellow",
    "stridor",
    "stuffy nose",
    "stupor",
    "suicidal",
    "superimposition",
    "sweat",
    "sweating increased",
    "swelling",
    "symptom aggravating factors",
    "syncope",
    "systolic ejection murmur",
    "systolic murmur",
    "t wave inverted",
    "tachypnea",
    "tenesmus",
    "terrify",
    "thicken",
    "throat sore",
    "throbbing sensation quality",
    "tinnitus",
    "tired",
    "titubation",
    "todd paralysis",
    "tonic seizures",
    "transaminitis",
    "transsexual",
    "tremor",
    "tremor resting",
    "tumor cell invasion",
    "unable to concentrate",
    "unconscious state",
    "uncoordination",
    "underweight",
    "unhappy",
    "unresponsiveness",
    "unsteady gait",
    "unwell",
    "urge incontinence",
    "urgency of micturition",
    "urinary hesitation",
    "urinoma",
    "verbal auditory hallucinations",
    "verbally abusive behavior",
    "vertigo",
    "vision blurred",
    "vomiting",
    "weepiness",
    "weight gain",
    "welt",
    "wheelchair bound",
    "wheezing",
    "withdraw",
    "worry",
    "yellow sputum",
  ];
    let list=[];
  symptoms.map((symptom,index)=>{
    list?.push({label:symptom,value:symptom})
      
  })
 
  const[option1,setoption1]=useState("")
  const [option2, setoption2] = useState("");
  const [option3, setoption3] = useState("");
  const [option4, setoption4] = useState("");

  const [option5, setoption5] = useState("");

 
  console.log(list)
  const colourStyles = {
    control: (base) => ({
      ...base,
      background: "#152033",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
    input: (base) => ({
      ...base,
      color: "#fff",
    }),
  };
 
  const [disease,setDisease] =useState()
  const addsymptom = ()=>{
   
      const s = option1+","+option2+","+option3+","+option4;
     console.log(s)
      axios
        .post(
          "https://disease-prediction-app-12.herokuapp.com/predict",
          {
            text: s,
          },
          
        )
        .then(function (response) {
          console.log(response);
          setDisease(response);
        })
        .catch(function (error) {
          console.log(error);
        });
     }
     
  return (
    <div className="bg-gradient-radial w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-gray-900 rounded-lg border border-white p-4 w-5/12 shadow-2xl shadow-black">
        <h1 className="font-bold text-2xl  text-white"> Disease Predictor</h1>
        <div className="pt-3 bg-gray-900">
          <Select
            styles={colourStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "hotpink",
                primary: "black",
              },
            })}
            onChange={(selectedOption) => setoption1(selectedOption.value)}
            autoFocus={true}
            options={list}
          ></Select>
        </div>
        <div className="pt-3">
          <Select
            styles={colourStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "hotpink",
                primary: "black",
              },
            })}
            onChange={(selectedOption) => setoption2(selectedOption.value)}
            autoFocus={true}
            options={list}
          ></Select>
        </div>
        <div className="pt-3">
          <Select
            styles={colourStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "hotpink",
                primary: "black",
              },
            })}
            onChange={(selectedOption) => setoption3(selectedOption.value)}
            autoFocus={true}
            options={list}
          ></Select>
        </div>
        <div className="pt-3">
          <Select
            styles={colourStyles}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "hotpink",
                primary: "black",
              },
            })}
            onChange={(selectedOption) => setoption4(selectedOption.value)}
            autoFocus={true}
            options={list}
          ></Select>
        </div>
      </div>
      <div className="p-4">
        {" "}
        <button
          className=" p-5  shadow-white border border-white shadow-lg text-4xl rounded-full text-white  bg-green-400 "
          onClick={() => {
            addsymptom();
          }}
        >
          Predict
        </button>
      </div>
      <div className="bg-black p-10 rounded-3xl text-white text-xl">
        Predicted Disease is
        <div className="text-3xl text-white font-bold">
          {disease?.data?.disease?.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default DiseasePredictor;
