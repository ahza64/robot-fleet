import { useState, useEffect } from 'react'

function Dashboard() {
  const [robots, setRobots] = useState([{ name: "default" }])

  const Robot = function(idx, name, location) {
    this.id = idx
    this.name = name
    this.location = location
  }

  useEffect(() => {
    const numRobots = 10
    const type = "Bender"
    const robotsArr = []
    for (var i = 0; i < numRobots; i++) {
      robotsArr.push(new Robot(i, `${type} unit ${i + 1}`, "MaintanceBay"))
    }
    setRobots(robotsArr)
  }, [])

  function moveRobot(robot, newLocation, robots) {
    let updateRobots = [...robots]
    let updateRobot = {...updateRobots[robot.id]}
    updateRobot.location = newLocation
    updateRobots[robot.id] = updateRobot
    setRobots(updateRobots)

  }

  const RobotCard = (props) => {

    return (
      <div>
        {props.robot.name}
        <button onClick={() => props.moveRobot(props.robot, "Dept1", props.robots)}>Dept 1</button>
        <button onClick={() => props.moveRobot(props.robot, "Dept2", props.robots)}>Dept 2</button>
        <button onClick={() => props.moveRobot(props.robot, "MaintanceBay", props.robots)}>Maint</button>
      </div>
    )
  }

  const MaintanenceBay = (props) => {

    return (
      <div>
        MaintanceBay robot list
        {props.robots.map((robot, idx) => {
          if (robot.location === "MaintanceBay") {
            return <RobotCard key={robot.name} robot={robot} moveRobot={props.moveRobot} robots={props.robots}/>
          }
        })}
      </div>
    )
  }

  const DepartmentOne = (props) => {

    return (
      <div>
        Department one robot list
        {props.robots.map((robot, idx) => {
          if (robot.location === "Dept1") {
            return <RobotCard key={robot.name} robot={robot} moveRobot={props.moveRobot} robots={props.robots} />
          }
        })}
      </div>
    )
  }

  const DepartmentTwo = (props) => {
    return (
      <div>
        Department two robot list
        {props.robots.map((robot, idx) => {
          if (robot.location === "Dept2") {
            return <RobotCard key={robot.name} robot={robot} moveRobot={props.moveRobot} robots={props.robots} />
          }
        })}
      </div>
    )
  }

  return (
    <div>
      robot lists
      <MaintanenceBay robots={robots} moveRobot={moveRobot} />
      <DepartmentOne robots={robots} moveRobot={moveRobot} />
      <DepartmentTwo robots={robots} moveRobot={moveRobot} />
    </div>
  )
}

export default Dashboard
