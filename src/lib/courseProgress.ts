// Course progress management using localStorage

export interface ModuleProgress {
  id: number;
  completed: boolean;
  score: number;
  passed: boolean;
}

export interface CourseProgress {
  modules: Record<number, ModuleProgress>;
  totalPoints: number;
  badges: number;
}

const STORAGE_KEY = "nopec_course_progress";
const PASSING_SCORE = 66;
const POINTS_PER_MODULE = 100;

export const getCourseProgress = (): CourseProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    modules: {},
    totalPoints: 0,
    badges: 0,
  };
};

export const saveCourseProgress = (progress: CourseProgress): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const completeModule = (
  moduleId: number,
  score: number
): CourseProgress => {
  const progress = getCourseProgress();
  const passed = score >= PASSING_SCORE;
  
  // Check if this is a new completion
  const isNewCompletion = !progress.modules[moduleId]?.completed;
  
  progress.modules[moduleId] = {
    id: moduleId,
    completed: passed, // Only mark as completed if passed
    score,
    passed,
  };

  // Add points only if passed and it's a new completion
  if (passed && isNewCompletion) {
    progress.totalPoints += POINTS_PER_MODULE;
    
    // Award badges based on milestones
    const completedCount = Object.values(progress.modules).filter(
      (m) => m.completed
    ).length;
    
    // Badge milestones: 1st, 3rd, 5th, 8th module
    if (completedCount === 1 || completedCount === 3 || completedCount === 5 || completedCount === 8) {
      progress.badges += 1;
    }
  }

  saveCourseProgress(progress);
  return progress;
};

export const getModuleProgress = (moduleId: number): ModuleProgress | null => {
  const progress = getCourseProgress();
  return progress.modules[moduleId] || null;
};

export const getCompletedModulesCount = (): number => {
  const progress = getCourseProgress();
  return Object.values(progress.modules).filter((m) => m.completed).length;
};

export const resetProgress = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
