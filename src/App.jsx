import React from "react"
import Card from "./card"

function App() {

  const data = [
    {
      plan: "FREE",
      fee: 0,
      user: "Single User",
      isUser:true,
      storage: "5GB Storage",
      isStorage:true,
      piblicproject: "Unlimited Public Projects",
      isPiblicproject:true,
      acces: "Community Access",
      isAcces:true,
      privateproject: "Unlimited Private Projects",
      isPrivateproject:false,
      support: "Dedicated Phone Support",
      isSupport:false,
      domain: "Free Subdomain",
      isDomain:false,
      status: "Montly Status Reports",
      isStatus:false
    },
    {
      plan: "PLUS",
      fee: 9,
      user: "5 User",
      isUser:true,
      storage: "50GB Storage",
      isStorage:true,
      piblicproject: "Unlimited Public Projects",
      isPiblicproject:true,
      acces: "Community Access",
      isAcces:true,
      privateproject: "Unlimited Private Projects",
      isPrivateproject:true,
      support: "Dedicated Phone Support",
      isSupport:true,
      domain: "Free Subdomain",
      isDomain:true,
      status: "Montly Status Reports",
      isStatus:false
    },
    {
      plan: "PRO",
      fee: 49,
      user: "Unlimited User",
      isUser:true,
      storage: "150GB Storage",
      isStorage:true,
      piblicproject: "Unlimited Public Projects",
      isPiblicproject:true,
      acces: "Community Access",
      isAcces:true,
      privateproject: "Unlimited Private Projects",
      isPrivateproject:true,
      support: "Dedicated Phone Support",
      isSupport:true,
      domain: "Free Subdomain",
      isDomain:true,
      status: "Montly Status Reports",
      isStatus:true
    }
  ]
  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((sud,i) => {
              return <Card things={sud} key={i} />
            })
          }
        </div>
      </div>
    </section>
  </>

}
export default App
