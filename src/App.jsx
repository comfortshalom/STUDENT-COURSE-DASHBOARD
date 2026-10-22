const courses = [
  { id: 1, title: 'Web Development',  lecturer: 'Dr. Kato', progress: 70,  completed: false },
  { id: 2, title: 'Database Systems', lecturer: 'Ms. Auma', progress: 100, completed: true }
];

// Reusable CourseCard component receiving course data through props


// Progress Was Added
function CourseCard({ course }) {
  
  
  // USEFUL FEATURE ( EXTENTION CHALLENGE ):    Dynamic color style depending on completion status.   COLOUR CODED STATUS BADGES ADDED
  const statusColor = course.completed ? '#2e7d32' : '#d84315'; 


    return (
    <article className="card">
      <h2>{course.title}</h2>
      <p><strong>Lecturer:</strong> {course.lecturer}</p>
      
      {/* Visualizing progress percentage */}

    <div style={{ margin: '10px 0' }}>
        <p style={{ margin: '0 0 4px 0' }}>Progress: {course.progress}%</p>
        
        
        {/* Simple visual progress bar */}
        <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '4px', height: '8px' }}>
          <div style={{ width: `${course.progress}%`, backgroundColor: statusColor, height: '100%', borderRadius: '4px' }}></div>
        </div>
    
    </div>


     <strong style={{ color: statusColor }}>
        {course.completed ? '✓ Completed' : '⟳ In progress'}
      </strong>
    </article>
  );
}


// The Empty State Condition Was Added


export default function App() {
  return (
    <main>
      <h1>My Course Dashboard</h1>
      <section className="grid">
        
        {courses.length === 0 ? (
          <p className="empty-message">No courses available at the moment.</p>
        ) : (
          courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))
        )}
      </section>
    </main>
  );
}
