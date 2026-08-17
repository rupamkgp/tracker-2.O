import React, { useState } from 'react';
import { CheckCircle, Circle, Edit3, X, Trash2, Plus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { formatDuration } from '../utils/format';
const TaskChecklist = ({ category, icon: Icon }) => {
  const { todayData, updateTask, addTask, deleteTask, subjects } = useAppContext();
  const tasks = todayData.tasks[category] || [];
  const categorySubjects = subjects.filter(s => s.category === category);
  
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSubjectName, setSelectedSubjectName] = useState('');
  const [customTaskName, setCustomTaskName] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [newTaskTime, setNewTaskTime] = useState(45);

  const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [output, setOutput] = useState(task.output);
    const [editTargetMinutes, setEditTargetMinutes] = useState(task.targetMinutes);

    const handleToggle = () => {
      updateTask(category, task.id, { completed: !task.completed });
    };

    const handleSaveDetails = () => {
      updateTask(category, task.id, { output, targetMinutes: Number(editTargetMinutes) });
      setIsEditing(false);
    };

    return (
      <div style={{ 
        padding: '16px', 
        borderBottom: '1px solid var(--border-color)',
        transition: 'background 0.2s ease',
        background: task.completed ? 'rgba(255,255,255,0.02)' : 'transparent',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          <button onClick={handleToggle} style={{ background: 'transparent', color: task.completed ? 'var(--status-excellent)' : 'var(--text-muted)' }}>
            {task.completed ? <CheckCircle size={22} /> : <Circle size={22} />}
          </button>
          
          <div style={{ flex: 1 }}>
            <div className="task-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ 
                fontSize: '1rem', 
                fontWeight: 500,
                color: task.completed ? 'var(--text-secondary)' : 'var(--text-primary)',
                textDecoration: task.completed ? 'line-through' : 'none'
              }}>
                {task.name}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {formatDuration(task.targetMinutes)}
              </div>
            </div>
            
            {/* Output Tracking */}
            {!isEditing && task.output && (
              <div style={{ 
                marginTop: '8px', 
                padding: '8px 12px', 
                background: 'rgba(0,0,0,0.2)', 
                borderRadius: '6px',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                borderLeft: '2px solid var(--accent-primary)',
                whiteSpace: 'pre-wrap'
              }}>
                {task.output}
              </div>
            )}
            
            {isEditing && (
              <div style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Target Minutes:</label>
                  <input 
                    type="number"
                    value={editTargetMinutes}
                    onChange={(e) => setEditTargetMinutes(e.target.value)}
                    style={{ width: '80px', padding: '4px 8px' }}
                  />
                </div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Task Output/Notes:</label>
                <textarea 
                  value={output}
                  onChange={(e) => setOutput(e.target.value)}
                  placeholder="e.g. Topic: Graphs&#10;Problems solved: 4&#10;Accuracy: 75%"
                  style={{ width: '100%', minHeight: '80px', marginBottom: '8px' }}
                />
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                  <button onClick={() => setIsEditing(false)} style={{ padding: '4px 12px', background: 'transparent', color: 'var(--text-muted)', borderRadius: '4px' }}>Cancel</button>
                  <button onClick={handleSaveDetails} style={{ padding: '4px 12px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '4px' }}>Save Changes</button>
                </div>
              </div>
            )}
          </div>
          
          {!isEditing && (
             <div style={{ display: 'flex', gap: '4px' }}>
               <button onClick={() => setIsEditing(true)} style={{ background: 'transparent', color: 'var(--text-muted)', padding: '4px' }} title="Edit Task Details">
                 <Edit3 size={16} />
               </button>
               <button onClick={() => deleteTask(category, task.id)} style={{ background: 'transparent', color: 'var(--status-minimum)', padding: '4px' }} title="Delete Task">
                 <Trash2 size={16} />
               </button>
             </div>
          )}

        </div>
      </div>
    );
  };

  const handleAddTask = () => {
    const finalName = isCustom || categorySubjects.length === 0 ? customTaskName : selectedSubjectName;
    if (finalName.trim() === '') return;
    
    addTask(category, { name: finalName, targetMinutes: Number(newTaskTime) });
    
    setCustomTaskName('');
    setNewTaskTime(45);
    setIsAdding(false);
  };

  const startAdding = () => {
    if (categorySubjects.length > 0) {
      setSelectedSubjectName(categorySubjects[0].name);
      setIsCustom(false);
    } else {
      setIsCustom(true);
    }
    setIsAdding(true);
  };

  return (
    <div className="glass-panel" style={{ marginBottom: '24px', overflow: 'hidden' }}>
      <div style={{ 
        padding: '16px 20px', 
        background: 'rgba(0,0,0,0.2)', 
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {Icon && <Icon size={18} color="var(--accent-secondary)" />}
        <h3 style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{category}</h3>
      </div>
      <div>
        {tasks.length > 0 ? (
          tasks.map(task => <TaskItem key={task.id} task={task} />)
        ) : (
          <div style={{ padding: '16px', color: 'var(--text-muted)', textAlign: 'center', fontSize: '0.9rem' }}>
            No tasks in this category.
          </div>
        )}
      </div>

      {isAdding ? (
        <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {categorySubjects.length > 0 && !isCustom ? (
              <select 
                value={selectedSubjectName}
                onChange={(e) => {
                  if (e.target.value === 'CUSTOM_OPTION') {
                    setIsCustom(true);
                    setCustomTaskName('');
                  } else {
                    setSelectedSubjectName(e.target.value);
                  }
                }}
                style={{ flex: 1, minWidth: '150px', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '4px' }}
              >
                {categorySubjects.map(s => (
                  <option key={s.id} value={s.name}>{s.name}</option>
                ))}
                <option value="CUSTOM_OPTION">Type custom task...</option>
              </select>
            ) : (
              <div style={{ flex: 1, display: 'flex', gap: '8px', minWidth: '150px' }}>
                <input 
                  type="text" 
                  placeholder="Task name..." 
                  value={customTaskName}
                  onChange={(e) => setCustomTaskName(e.target.value)}
                  style={{ flex: 1 }}
                  autoFocus
                />
                {categorySubjects.length > 0 && (
                  <button onClick={() => { setIsCustom(false); setSelectedSubjectName(categorySubjects[0].name); }} style={{ padding: '0 8px', background: 'transparent', color: 'var(--text-muted)' }} title="Back to Subjects">
                    <X size={16} />
                  </button>
                )}
              </div>
            )}
            <input 
              type="number" 
              placeholder="Mins" 
              value={newTaskTime}
              onChange={(e) => setNewTaskTime(e.target.value)}
              style={{ width: '80px' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button onClick={() => setIsAdding(false)} style={{ padding: '6px 12px', background: 'transparent', color: 'var(--text-muted)' }}>Cancel</button>
            <button onClick={handleAddTask} style={{ padding: '6px 12px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '4px' }}>Add</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={startAdding}
          style={{ 
            width: '100%', 
            padding: '12px', 
            background: 'transparent', 
            color: 'var(--text-muted)', 
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.02)'}
          onMouseLeave={(e) => e.target.style.background = 'transparent'}
        >
          <Plus size={16} /> Add Task
        </button>
      )}
    </div>
  );
};

export default TaskChecklist;
