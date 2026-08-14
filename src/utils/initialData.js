export const initialSubjects = [
  { id: 'sub_1', name: 'Resistance', type: 'Department Core', currentTopic: 'Chapter 2', progress: 65, category: 'Academic' },
  { id: 'sub_2', name: 'Elements of Ocean Engineering', type: 'Department Core', currentTopic: 'Fluid Mechanics', progress: 40, category: 'Academic' },
  { id: 'sub_3', name: 'Entrepreneurship Essentials', type: 'Interdisciplinary', currentTopic: 'Marketing', progress: 72, category: 'Academic' },
  { id: 'sub_4', name: 'Ship Strength', type: 'Department Core', currentTopic: 'Ship Design', progress: 50, category: 'Academic' },
  { id: 'sub_12', name: 'Propulsion', type: 'Department Core', currentTopic: '', progress: 0, category: 'Academic' },
  { id: 'sub_13', name: 'Hydrodynamics Laboratory', type: 'Department Lab', currentTopic: '', progress: 0, category: 'Academic' },
  { id: 'sub_14', name: 'Marine Structural Laboratory', type: 'Department Lab', currentTopic: '', progress: 0, category: 'Academic' },
  { id: 'sub_5', name: 'AI Engineer', type: 'Career', currentTopic: 'ML', progress: 55, category: 'Technical' },
  { id: 'sub_6', name: 'DSA', type: 'Career', currentTopic: 'Graphs', progress: 80, category: 'Technical' },
  { id: 'sub_7', name: 'Competitive Programming', type: 'Career', currentTopic: 'DP', progress: 35, category: 'Technical' },
  { id: 'sub_8', name: 'Quant Trading', type: 'Career', currentTopic: 'Probability', progress: 30, category: 'Technical' },
  { id: 'sub_9', name: 'CS Fundamentals', type: 'Career', currentTopic: 'OS', progress: 45, category: 'Technical' },
  { id: 'sub_10', name: 'Business Book', type: 'Knowledge', currentTopic: 'Atomic Habits', progress: 60, category: 'Reading' },
  { id: 'sub_11', name: 'General/Other Book', type: 'Knowledge', currentTopic: 'Sci-Fi', progress: 40, category: 'Reading' },
];

export const weeklyTimetable = {
  Monday: [
    { time: '08:00', subject: 'Resistance' },
    { time: '09:00', subject: 'Resistance' },
    { time: '10:00', subject: 'Elements of Ocean Engineering' },
    { time: '11:00', subject: 'Entrepreneurship Essentials' },
    { time: '12:00', subject: 'Ship Strength' },
  ],
  Tuesday: [
    { time: '09:00', subject: 'Elements of Ocean Engineering' },
    { time: '10:00', subject: 'Elements of Ocean Engineering' },
    { time: '14:00', subject: 'AI Engineer' },
  ],
  Wednesday: [
    { time: '08:00', subject: 'Entrepreneurship Essentials' },
    { time: '11:00', subject: 'Ship Strength' },
  ],
  Thursday: [
    { time: '10:00', subject: 'Resistance' },
    { time: '11:00', subject: 'Elements of Ocean Engineering' },
  ],
  Friday: [
    { time: '08:00', subject: 'Entrepreneurship Essentials' } // Light day for projects
  ]
};

export const defaultTasks = {
  Technical: [
    { id: 't_1', subjectId: 'sub_5', name: 'AI Engineer', targetMinutes: 60, completed: false, output: '' },
    { id: 't_2', subjectId: 'sub_6', name: 'DSA', targetMinutes: 60, completed: false, output: '' },
    { id: 't_3', subjectId: 'sub_7', name: 'Competitive Programming', targetMinutes: 45, completed: false, output: '' },
    { id: 't_4', subjectId: 'sub_8', name: 'Quant Trading', targetMinutes: 45, completed: false, output: '' },
    { id: 't_5', subjectId: 'sub_9', name: 'CS Fundamentals', targetMinutes: 45, completed: false, output: '' },
  ],
  Reading: [
    { id: 'r_1', subjectId: 'sub_10', name: 'Business Book', targetMinutes: 20, completed: false, output: '' },
    { id: 'r_2', subjectId: 'sub_11', name: 'General/Other Book', targetMinutes: 20, completed: false, output: '' },
  ],
  Review: [
    { id: 'rev_1', name: 'Review today\'s learning', targetMinutes: 10, completed: false, output: '' },
    { id: 'rev_3', name: 'Record study hours', targetMinutes: 5, completed: false, output: '' },
  ]
};

export const initialSubjectCategories = [
  { id: 'cat_1', title: 'Department Subjects', category: 'Academic', defaultType: 'Department Core' },
  { id: 'cat_2', title: 'Career Subjects', category: 'Technical', defaultType: 'Career' },
  { id: 'cat_3', title: 'Knowledge & Reading', category: 'Reading', defaultType: 'Knowledge' }
];
