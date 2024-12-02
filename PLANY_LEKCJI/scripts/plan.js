function drukuj(){
	if(self.parent.frames.length<2)
		alert('Polecenie niedostêpne')
	else{
		self.parent.plan.focus()
		window.print()
	}
}
