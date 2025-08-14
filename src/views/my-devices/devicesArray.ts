import SmartDevicesImage from "@/assets/images/my-devices/smartDevices.png"
import LaptopImage from "@/assets/images/my-devices/laptop.png"
import QuadrupedDogImage from "@/assets/images/my-devices/quadrupedDog.png"
import CarsImage from "@/assets/images/my-devices/cars.png"
import HumanoidImage from "@/assets/images/my-devices/humanoid.png"
import OtherRobotsImage from "@/assets/images/my-devices/otherRobots.png"

export const devicesArray = [
  {
    device: { image: SmartDevicesImage, name: 'smart devices', id: 15331319 },
    status: 'ON',
    DurationOfRunning: 1,
    points: 98
  },
  {
    device: { image: LaptopImage, name: 'laptop', id: 15331320 },
    status: 'OFF',
    DurationOfRunning: 0,
    points: 176
  },
  {
    device: { image: QuadrupedDogImage, name: 'quadruped dog', id: 15331321 },
    status: 'OFF',
    DurationOfRunning: 0,
    points: 321
  },
  {
    device: { image: CarsImage, name: 'cars', id: 15331322 },
    status: 'OFF',
    DurationOfRunning: 0,
    points: 215
  },
  {
    device: { image: HumanoidImage, name: 'humanoid', id: 15331323 },
    status: 'OFF',
    DurationOfRunning: 0,
    points: 44
  },
  {
    device: { image: OtherRobotsImage, name: 'other robots', id: 15331324 },
    status: 'OFF',
    DurationOfRunning: 0,
    points: 122
  },
]
