import "./App.css";
import Header from "./components/Header";
import { Main } from "./components/Main";
import Card from "./components/Card";

function App() {
  var myIdValue = 1000;
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Card
          id={myIdValue}
          image="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg"
          name="Raj Sinha"
          gender="male"
        />

        <Card
          id={102}
          image="https://th.bing.com/th?id=OIP.9oPtaexuvvh9wG20_htK5wHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          name="Sneha Reddy"
          gender={"female"}
        />

        <Card
          id={103}
          image="https://th.bing.com/th/id/R.2c7e39ade2a146692070a8f14d3884d7?rik=6xY5JSeBBE8F0w&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f190000%2fvelka%2fyoung-business-woman-1470305677WT3.jpg&ehk=EKqQffrs4G7iCk%2bzcJTVDes8e9nDTmNlqWxWH6JQ1%2fY%3d&risl=&pid=ImgRaw&r=0"
          name="Zoya Khan"
          gender="female"
        />

        <Card
          id={104}
          image="https://ysm-res.cloudinary.com/image/upload/ar_3:4,c_fill,dpr_auto,f_auto,g_faces:auto,q_auto:eco,w_auto/v1/yms/prod/3a8a2257-732b-4d8d-a490-482aec9ba550"
          name="Chris topper"
          gender="male"
        />
      </div>
    </div>
  );
}

export default App;
