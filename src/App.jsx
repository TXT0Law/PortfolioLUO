import Section1 from "./sections/sectionOne.jsx";
import Section2 from "./sections/sectionTwo.jsx";
import SectionEducation from "./sections/sectionThree.jsx";
import SectionExperience from "./sections/sectionFour.jsx";
import SectionSkills from "./sections/sectionFive.jsx";
import SectionProjects from "./sections/sectionSix.jsx";
import SectionCTF from "./sections/sectionSeven.jsx";
import SectionCompetitions from "./sections/sectionEight.jsx";
import SectionContact from "./sections/sectionNine.jsx";

import TopNavigation from "./components/topnavigation.jsx";

function App() {
    return (
        <>
            <TopNavigation />
            <Section1 />
            <Section2 />
            <SectionEducation />
            <SectionExperience />
            <SectionSkills />
            <SectionProjects />
            <SectionCTF />
            <SectionCompetitions />
            <SectionContact />
        </>
    );
}

export default App
