import Section from "components/Section";
import songs from "data/songs"

function Home() {
                        
	return (
		
		       
		<div className="grid gap-y-8">
			
			<h3>{"AlfaNova"}</h3>
			
			<Section
				title="Recently played"
				more="/blabla"
				items={songs}
			/>
			<Section
				title="Shows to try"
				more="/blabla"
				items={songs}
			/>
			<Section
				title="Made for Muhammed Bahadir"
				more="/blabla"
				items={songs}
			/>
		</div>
	)
}

export default Home
