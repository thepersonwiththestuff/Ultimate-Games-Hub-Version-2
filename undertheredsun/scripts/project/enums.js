globalThis.enums = new Map();

globalThis.enumToVal = (name, value) => {
	const enumToValMap = globalThis.enums.get(name).enumToVal
	return enumToValMap.get(value) ?? enumToValMap.get(0)
}

globalThis.valToEnum = (name, value) => {
	return globalThis.enums.get(name).valToEnum.get(value) ?? 0
}

function makeEnum(name, arr){
    const valToEnum = new Map()
    const enumToVal = new Map()
    for (let i = 0; i<arr.length; i++){
        valToEnum.set(arr[i], i)
        enumToVal.set(i, arr[i])
    }
    globalThis.enums.set(name, {
		valToEnum,
		enumToVal
	})
}

runOnStartup(async runtime => {
	const skinData = await runtime.assets.fetchJson("jsons/skinData.json")
	const nameData = await runtime.assets.fetchJson("jsons/nameTemplate.json")

	makeEnum("emote", [
		"",
		"run",
		"fall",
		"angry",
		"dead",
		"happy",
		"here",
		"wave",
		"heart",
	])

	makeEnum("animation", [
		'idle',
		'fall',
		'jump',
		'jumpFromSlide',
		'landed',
		'run',
		'sliding',
		'vaultJump',
		'wallBackJump',
		'wallClimb',
		'wallJump',
		'wallRun',
		'wallRunLeft',
		'wallRunRight'
	])
	
	makeEnum("skin", skinData.skinOrder)
	makeEnum("firstName", nameData.firstName)
	makeEnum("secondName", nameData.secondName)
})