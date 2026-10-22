const courses = [
  { id: 1, title: 'Web Development',  lecturer: 'Dr. Kato', progress: 70,  completed: false },
  { id: 2, title: 'Database Systems', lecturer: 'Ms. Auma', progress: 100, completed: true }
];

// Reusable CourseCard component receiving course data through props


// Progress Was Added
function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p>{course.lecturer}</p>
      {/* Visualizing progress percentage */}



      <p>Progress: {course.progress}%</p>  
      <strong>{course.completed ? 'Completed' : 'In progress'}</strong>
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
