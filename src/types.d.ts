interface InitState {
  exercises: Exercise[];
  search: string;
  bodyPart: string;
  selected: Exercise | object;
}

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  target: string;
}

interface Result {
  status_code: number;
  request_result: string;
  data: {
    bmi?: number;
    health?: string;
    healthy_bmi_range?: string;
    calorie?: number;
    balanced?: {
      protein?: number;
      fat?: number;
      carbs?: number;
    };
    lowfat?: {
      protein?: number;
      fat?: number;
      carbs?: number;
    };
    lowcarbs?: {
      protein?: number;
      fat?: number;
      carbs?: number;
    };
    highprotein?: {
      protein?: number;
      fat?: number;
      carbs?: number;
    };
    "Body Fat (U.S. Navy Method)"?: number;
    "Body Fat Mass"?: number;
    "Lean Body Mass"?: number;
    "Body Fat (BMI method)"?: number;
    Hamwi?: number;
    Devine?: number;
    Miller?: number;
    Robinson?: number;
    BMR?: number;
    goals?: {
      "maintain weight"?: number;
      "Mild weight loss"?: {
        "loss weight"?: string;
        calory?: number;
      };
      "Weight loss"?: {
        "loss weight"?: string;
        calory?: number;
      };
      "Extreme weight loss"?: {
        "loss weight"?: string;
        calory?: number;
      };
      "Mild weight gain"?: {
        "gain weight"?: string;
        calory?: number;
      };
      "Weight gain"?: {
        "gain weight"?: string;
        calory?: number;
      };
      "Extreme weight gain"?: {
        "gain weight"?: string;
        calory?: number;
      };
    };
  };
}

interface FoodResult {
  items: Array<{
    name: string;
    calories: number;
    serving_size_g: number;
    fat_total_g: number;
    fat_saturated_g: number;
    protein_g: number;
    sodium_mg: number;
    potassium_mg: number;
    cholesterol_mg: number;
    carbohydrates_total_g: number;
    fiber_g: number;
    sugar_g: number;
  }>;
}
