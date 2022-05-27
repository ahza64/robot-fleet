function Dashboard() {
  const MaintanenceBay = () => {
    return (
      <div>
        MaintanceBay robot list
      </div>
    )
  }

  const DepartmentOne = () => {
    return (
      <div>
        Department one robot list
      </div>
    )
  }

  const DepartmentTwo = () => {
    return (
      <div>
        Department two robot list
      </div>
    )
  }

  return (
    <div>
      robot lists
      <MaintanenceBay />
      <DepartmentOne />
      <DepartmentTwo />
    </div>
  )
}

export default Dashboard
