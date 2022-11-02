import * as dotenv from 'dotenv'

export default function main() {
	dotenv.config()
}
class Hello {

	static hellos: Set<string> = new Set()

	sayHi (): void {
		Hello.hellos.add("hi " + Date())
	}

	sayHello(): void {
		Hello.hellos.add("hello " + Date())
		this.sayHi()
		console.log(Hello.hellos)
	}
}



new Hello().sayHello()