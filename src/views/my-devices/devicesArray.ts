import SmartDevicesImage from "@/assets/images/my-devices/smartDevices.png"
import LaptopImage from "@/assets/images/my-devices/laptop.png"
import QuadrupedDogImage from "@/assets/images/my-devices/quadrupedDog.png"
import CarsImage from "@/assets/images/my-devices/cars.png"
import HumanoidImage from "@/assets/images/my-devices/humanoid.png"
import OtherRobotsImage from "@/assets/images/my-devices/otherRobots.png"

export const devicesArray = [
  {
    user: { image: SmartDevicesImage, name: 'smart devices', id: 15331319 },
    status: 'ON',
    unclaimedPoints: 15274609,
    Ops: { light: 4, number: 0.057778 },
    device: 'CLI',
    points: 98.23
  },
  {
    user: { image: LaptopImage, name: 'laptop', id: 15331320 },
    status: 'OFF',
    unclaimedPoints: 0,
    Ops: { light: 0, number: 0 },
    device: 'CLI',
    points: 176.54
  },
  {
    user: { image: QuadrupedDogImage, name: 'quadruped dog', id: 15331321 },
    status: 'OFF',
    unclaimedPoints: 0,
    Ops: { light: 0, number: 0 },
    device: 'CLI',
    points: 321.75
  },
  {
    user: { image: CarsImage, name: 'cars', id: 15331322 },
    status: 'OFF',
    unclaimedPoints: 0,
    Ops: { light: 0, number: 0 },
    device: 'CLI',
    points: 215.65
  },
  {
    user: { image: HumanoidImage, name: 'humanoid', id: 15331323 },
    status: 'OFF',
    unclaimedPoints: 0,
    Ops: { light: 0, number: 0 },
    device: 'CLI',
    points: 442.12
  },
  {
    user: { image: OtherRobotsImage, name: 'other robots', id: 15331324 },
    status: 'OFF',
    unclaimedPoints: 0,
    Ops: { light: 0, number: 0 },
    device: 'CLI',
    points: 0
  },
]
