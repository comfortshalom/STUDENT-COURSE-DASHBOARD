# Starter project

Run `npm install` and `npm run dev`. Complete the tasks in the matching lab guide.


# Student Course Dashboard 🎓

A responsive, component-driven React dashboard built with Vite that dynamically renders course completion progress, adapts flawlessly to mobile and desktop screens, and includes an empty state handler.


## 🛠️ Summary of Tasks Completed

### **Step 1: Environment & File Inspection**
* Validated project structures, verified running states with Vite compiler scripts, and reviewed the core files: `src/App.jsx` and `src/styles.css`.

### **Step 2 & 3: Component Engineering & Dynamic Array Rendering**
* Abstracted the repetitive UI layout into a single, highly reusable function component named `CourseCard`.
* Programmed `CourseCard` to accept data values dynamically through React structured parameters (**props**).
* Implemented the JavaScript `.map()` array iterator method within the dashboard array container to render cards dynamically based on raw data object counts.
* Attached a unique, stable numerical attribute identifier (`key={course.id}`) on iterated markup blocks to satisfy React virtual DOM reconciliation rules.

### **Step 4: Conditional Workflow & Empty State Validation**
* Engineered a fallback layout mechanism checking data lengths via strict conditional logic wrappers (`courses.length === 0`).
* Verified execution behavior by purging standard data configurations to ensure user interfaces fall back cleanly onto a descriptive string notice when course items drop to zero.

### **Step 5: Visual Polish, Spacing & The Extension Challenge**
* Re-architected data metrics into visual data structures by wrapping status properties into a color-calibrated percentage indicator metric.
* Integrated a custom, horizontal fluid completion visual loading bar utilizing variable inline CSS definitions.

---

## 🧠 Detailed Engineering Explanations

### **1. Component Tree Architecture**
The architecture is structured hierarchically to promote structural isolation and one-way declarative flow paths:
```text
[ App Component ] (State Container & Layout Wrapper)
       │
       ├── [ h1 ] (Static Header Element)
       │
       └── [ section.grid ] (Responsive Layout Container Box)
                 │
                 ├─── [ CourseCard (id: 1) ] ──► Passed via Props: Title, Progress, Status
                 │
                 └─── [ CourseCard (id: 2) ] ──► Passed via Props: Title, Progress, Status
```
* **`App` Component:** Acts as the high-level root component. It reads the source data array (`courses`), evaluates global layout states (checking if array structures are empty), and maps layout blocks down to child elements.
* **`CourseCard` Component:** Acts as a specialized UI component. It doesn't modify data; it simply accepts an object profile through `props` and translates raw data metrics into visual templates.

### **2. Props Mechanics**
Props (short for *properties*) are data configurations passed down from a parent component to a child component. In this application, they work like this:
```jsx
courses.map((c) => (
  <CourseCard key={c.id} course={c} />
))
```
The child component unpacks that parameter using ES6 destructuring:
```jsx
function CourseCard({ course }) { ... }
```
This design allows a single `CourseCard` template to adapt instantly to different content inputs, keeping code clean and eliminating the need to write separate components for every course.

### **3. Stable Keys Execution**
When looping through array sequences, React demands an exclusive structural reference parameter named `key`. 
```jsx
key={c.id}
```
Using the data array's unique database identifier (`id`) gives React a permanent anchor point. If an element updates, changes position, or gets deleted, the virtual DOM pinpoints the change instantly without re-rendering the entire view.

### **4. Responsive Grid Logic**
Layout flexibility relies on modern CSS Grid behaviors defined inside the global wrapper layout class (`.grid`):
* **Desktop Monitors:** Cards arrange themselves side-by-side in horizontal column formats.
* **Mobile Screen Display:** When horizontal screen dimensions scale down below safe thresholds, column structures collapse gracefully. Card elements snap down into vertically stacked block configurations, eliminating clumsy horizontal scrolling side offsets.

### **5. Spacing Improvements & Extension Challenge Features**
* **Dynamic Color-Coding Badges:** We introduced a status expression evaluation variable (`const statusColor = course.completed ? '#2e7d32' : '#d84315'`). This checks conditional states inline to instantly paint completion attributes **Green** or in-progress states **Orange**.
* **Visual Progress Bars:** Raw completion statistics were mapped into nested container layouts. The parent wrapper generates a neutral track backdrop, while the inner child dynamically applies `width: ${course.progress}%` matching database metrics.
* **Proportional Padding Spaces:** Hand-crafted spacing variables (`margin: '10px 0'` and `margin: '0 0 4px 0'`) create distinct, intentional gaps between headings, content sections, and graphic indicator shapes. This prevents elements from bleeding into one another and improves layout readability.
