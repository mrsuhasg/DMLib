import mauliLogo from '../../assets/mauli.jpg'
import './header.css'

function Header() {

  return (
    <>
      <div className="container">
        <img src={mauliLogo} className="logo" alt="Mauli" />
        <div className="content">
          <h1 style={{ alignContent: 'center', margin: 0 }}>श्री ज्ञानेश्वर माऊली ज्ञानपीठ सार्वजनिक ग्रंथालय संस्था</h1>
          <h5 style={{ alignContent: 'center', marginTop: 0, marginBottom: 0 }}>क. डों. म. न.पा. शाळा क्र. १४ व १५ जवळ, मराठा कोळशेवाडी, कल्याण पूर्व ४२१३०६ </h5>
          <h4 style={{ alignContent: 'center', margin: 0, marginTop: 2 }}>( नोंदणी क्र. महा -११७०/२००१-ठाणे ) ( एफ - १०,०६०)</h4>
        </div>
      </div>
    </>
  )
}

export default Header
