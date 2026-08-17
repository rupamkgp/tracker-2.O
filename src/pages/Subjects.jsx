import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Search, ChevronDown, ChevronUp, Plus, Trash2, Edit3, FolderPlus } from 'lucide-react';

const Subjects = () => {
  const { subjects, subjectCategories, addSubject, deleteSubject, updateSubject, addSubjectCategory, deleteSubjectCategory } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingCat, setIsAddingCat] = useState(false);
  const [newCatTitle, setNewCatTitle] = useState('');
  
  // State for custom confirmation dialog
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmDeleteTitle, setConfirmDeleteTitle] = useState('');

  const filteredSubjects = subjects.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ProgressBar = ({ percent }) => (
    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
      <div style={{ 
        width: `${percent}%`, 
        height: '100%', 
        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
      }} />
    </div>
  );

  const getSubjectColor = (subjectName) => {
    if (!subjectName) return { bg: 'rgba(255,255,255,0.1)', text: 'var(--text-muted)' };
    
    const palettes = [
      { bg: 'rgba(99, 102, 241, 0.15)', text: '#818cf8' },  // Indigo
      { bg: 'rgba(16, 185, 129, 0.15)', text: '#34d399' },  // Emerald
      { bg: 'rgba(245, 158, 11, 0.15)', text: '#fbbf24' },  // Amber
      { bg: 'rgba(236, 72, 153, 0.15)', text: '#f472b6' },  // Pink
      { bg: 'rgba(14, 165, 233, 0.15)', text: '#38bdf8' },  // Sky
      { bg: 'rgba(139, 92, 246, 0.15)', text: '#a78bfa' },  // Violet
      { bg: 'rgba(239, 68, 68, 0.15)', text: '#f87171' },   // Red
      { bg: 'rgba(20, 184, 166, 0.15)', text: '#2dd4bf' },  // Teal
    ];
    
    let hash = 0;
    const cleanName = subjectName.trim().toLowerCase();
    for (let i = 0; i < cleanName.length; i++) {
      hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % palettes.length;
    return palettes[index];
  };

  const SubjectGroup = ({ id, title, category, defaultType }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [newSubName, setNewSubName] = useState('');
    const [newSubType, setNewSubType] = useState(defaultType);

    const [editingNameId, setEditingNameId] = useState(null);
    const [editNameValue, setEditNameValue] = useState('');
    
    const groupSubjects = filteredSubjects.filter(s => s.category === category);

    const handleAdd = () => {
      if (!newSubName.trim()) return;
      addSubject({ name: newSubName, type: newSubType, category });
      setNewSubName('');
      setNewSubType(defaultType);
      setIsAdding(false);
    };

    return (
      <div className="glass-panel" style={{ marginBottom: '24px', overflow: 'hidden' }}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            padding: '16px 20px', 
            background: 'rgba(0,0,0,0.2)', 
            borderBottom: isOpen ? '1px solid var(--border-color)' : 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '1px' }}>{title}</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setConfirmDeleteTitle(title);
                setConfirmDeleteId(id);
              }}
              style={{ background: 'transparent', color: 'var(--text-muted)' }}
              title="Delete Section"
            >
              <Trash2 size={18} />
            </button>
            {isOpen ? <ChevronUp size={20} color="var(--text-muted)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
          </div>
        </div>
        
        {isOpen && (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.1)' }}>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>Subject</th>
                <th style={{ padding: '16px', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>Type</th>
                <th style={{ padding: '16px', width: '50px' }}></th>
              </tr>
            </thead>
            <tbody>
              {groupSubjects.length === 0 && !isAdding && (
                 <tr><td colSpan="3" style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)' }}>No subjects.</td></tr>
              )}
              {groupSubjects.map(sub => (
                <tr key={sub.id} style={{ borderBottom: '1px solid var(--border-color)', transition: 'background 0.2s', ':hover': { background: 'rgba(255,255,255,0.02)' } }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>
                    {editingNameId === sub.id ? (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <input 
                          type="text" 
                          value={editNameValue} 
                          onChange={e => setEditNameValue(e.target.value)}
                          style={{ width: '100%', padding: '4px 8px' }}
                          autoFocus
                        />
                        <button onClick={() => {
                          updateSubject(sub.id, { name: editNameValue });
                          setEditingNameId(null);
                        }} style={{ background: 'var(--accent-primary)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>Save</button>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {sub.name}
                        <button onClick={() => {
                          setEditingNameId(sub.id);
                          setEditNameValue(sub.name);
                        }} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                          <Edit3 size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '16px' }}>
                    <span style={{ 
                      padding: '4px 10px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem', 
                      background: getSubjectColor(sub.name).bg,
                      color: getSubjectColor(sub.name).text
                    }}>
                      {sub.type}
                    </span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <button onClick={() => deleteSubject(sub.id)} style={{ background: 'transparent', color: 'var(--status-minimum)', padding: '4px' }}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {isAdding && (
                <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <td style={{ padding: '16px' }}>
                    <input type="text" placeholder="Subject Name..." value={newSubName} onChange={e => setNewSubName(e.target.value)} style={{ width: '100%' }} autoFocus />
                  </td>
                  <td style={{ padding: '16px' }}>
                    <input type="text" placeholder="Type (e.g. Core)" value={newSubType} onChange={e => setNewSubType(e.target.value)} style={{ width: '100%' }} />
                  </td>
                  <td style={{ padding: '16px', textAlign: 'right' }}>
                    <button onClick={() => setIsAdding(false)} style={{ padding: '6px 12px', background: 'transparent', color: 'var(--text-muted)', marginRight: '8px' }}>Cancel</button>
                    <button onClick={handleAdd} style={{ padding: '6px 12px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '4px' }}>Save</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        {isOpen && !isAdding && (
          <button 
            onClick={() => setIsAdding(true)}
            style={{ width: '100%', padding: '12px', background: 'transparent', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <Plus size={16} /> Add Subject
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 className="page-title">SUBJECTS</h1>
          <p className="page-subtitle">Database of your academic and technical subjects.</p>
        </div>
        
        <div style={{ position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search subjects..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '36px', width: '250px' }}
          />
        </div>
      </div>

      {subjectCategories.map(cat => (
        <SubjectGroup key={cat.id} id={cat.id} title={cat.title} category={cat.category} defaultType={cat.defaultType} />
      ))}

      {isAddingCat ? (
        <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Section Title (e.g. Fitness Subjects)" 
            value={newCatTitle}
            onChange={(e) => setNewCatTitle(e.target.value)}
            style={{ flex: 1 }}
            autoFocus
          />
          <button onClick={() => setIsAddingCat(false)} style={{ padding: '8px 16px', background: 'transparent', color: 'var(--text-muted)' }}>Cancel</button>
          <button onClick={() => {
            if (newCatTitle.trim()) {
              addSubjectCategory({ title: newCatTitle, category: newCatTitle, defaultType: 'General' });
              setNewCatTitle('');
              setIsAddingCat(false);
            }
          }} style={{ padding: '8px 16px', background: 'var(--accent-primary)', color: '#fff', borderRadius: '4px' }}>Save Section</button>
        </div>
      ) : (
        <button 
          onClick={() => setIsAddingCat(true)}
          style={{ 
            width: '100%', 
            padding: '16px', 
            background: 'rgba(0,0,0,0.2)', 
            border: '1px dashed var(--border-color)', 
            borderRadius: '12px',
            color: 'var(--text-muted)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px', 
            cursor: 'pointer',
            transition: 'background 0.2s, color 0.2s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.2)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
        >
          <FolderPlus size={18} /> Add New Subject Section
        </button>
      )}

      {filteredSubjects.length === 0 && searchTerm && (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '48px' }}>
          No subjects found matching "{searchTerm}"
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {confirmDeleteId && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
          }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-primary)' }}>Delete Section?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Are you sure you want to delete the "{confirmDeleteTitle}" section? This cannot be undone.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button 
                onClick={() => {
                  setConfirmDeleteId(null);
                  setConfirmDeleteTitle('');
                }}
                style={{
                  padding: '8px 16px',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  deleteSubjectCategory(confirmDeleteId);
                  setConfirmDeleteId(null);
                  setConfirmDeleteTitle('');
                }}
                style={{
                  padding: '8px 16px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjects;
