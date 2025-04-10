import headerIcon from '../../assets/react-core-concepts.png'
import './Header.css'


const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function getRandonmInt(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){
  const description = reactDescription[getRandonmInt(2)];
  return(
    <header>
        <img src={headerIcon} alt="Stylized atom" />
        <h1>React Project</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}