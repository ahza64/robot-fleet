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
      // console.log("robot", robotsArr);
    }
    setRobots(robotsArr)
  }, [])

  function moveRobot(robot, newLocation, robots) {
    // console.log("moveRobot", robots[robot.id].location, newLocation);

    robots[robot.id].location = newLocation
    console.log("newLocation", robots);
    setRobots(robots)
  }

  const RobotCard = (props) => {

    return (
      <div>
        {props.robot.name}
        <button onClick={() => props.moveRobot(props.robot, "Dept1", props.robots)}>Dept 1</button>
        <button>Dept 2</button>
        <button>Maint</button>
      </div>
    )
  }

  const MaintanenceBay = (props) => {
    // function moveToOne(robot) {
    //
    //   console.log("move robot", robot);
    // }

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
    // function moveToOne(robot) {
    //
    //   console.log("move robot", robot);
    // }

    return (
      <div>
        Department one robot list
        {props.robots.map((robot, idx) => {
          if (robot.location === "Dept1") {
            return <RobotCard key={robot.name} robot={robot} />
          }
        })}
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
      <MaintanenceBay robots={robots} moveRobot={moveRobot} />
      <DepartmentOne robots={robots} />
      <DepartmentTwo robots={robots} />
    </div>
  )
}

export default Dashboard
