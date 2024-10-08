import logo from './logo.svg';
import './App.css';
import NameHeader from './components/header/NameHeader'
import ProjectCard from './components/projects/ProjectCard';
import EducationCard from './components/education/EducationCard';

function App() {
  return (
    <div className='App'>
      <div className='App'>
        <NameHeader />
        <EducationCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
