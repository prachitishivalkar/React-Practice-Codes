import React from 'react';

function Exp21() {
  const students = [
    { id: 101, name: "Arjun Mehta", grade: "A+", status: "Distinction" },
    { id: 102, name: "Sara Gilbert", grade: "A", status: "Honors" },
    { id: 103, name: "Kenji Sato", grade: "B+", status: "Merit" },
    { id: 104, name: "Elena Rossi", grade: "A-", status: "Honors" }
  ];

  return (
    <div className="exp21-dashboard-root">
      <div className="exp21-glass-card">
        <header className="exp21-card-header">
          <h2>Student Performance</h2>
          <span className="exp21-count-pill">{students.length} Records</span>
        </header>

        <div className="exp21-list-container">
          {students.map((student) => (
            <div key={student.id} className="exp21-student-row">
              <div className="exp21-info">
                <span className="exp21-student-id">#{student.id}</span>
                <span className="exp21-student-name">{student.name}</span>
              </div>
              <div className="exp21-badges">
                <span className="exp21-status-badge">{student.status}</span>
                <span className="exp21-grade-badge">{student.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exp21;