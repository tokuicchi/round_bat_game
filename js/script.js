
window.onload = function() 
{
  var turn = '○';
  var tds = document.getElementsByTagName('td');
  for (var i = 0; i < tds.length; i++) {
		tds[i].addEventListener('click', mark);
	}

  // ○×の入力
	function mark(e)
	{
    if (e.target.innerHTML == '') {
      e.target.innerHTML = turn;
      // 勝敗がつけばそこで終わり、ついていなければ◯と×で攻守交代
      if (victory()) {
				alert(turn + 'の勝ち');
				next();
      } else {
				change_turn();
				if(draw()){
					alert('引き分け');
					next();
				}
			}
		}
	}

  // 勝敗の判定
	function victory()
	{
		var tds = document.getElementsByTagName('td');
		if (tds[0].innerHTML != '' && tds[0].innerHTML == tds[1].innerHTML && tds[0].innerHTML == tds[2].innerHTML) {
			return true;
		} else if (tds[3].innerHTML != '' && tds[3].innerHTML == tds[4].innerHTML && tds[3].innerHTML == tds[5].innerHTML) {
			return true;
		} else if (tds[6].innerHTML != '' && tds[6].innerHTML == tds[7].innerHTML && tds[6].innerHTML == tds[8].innerHTML) {
			return true;
		} else if (tds[0].innerHTML != '' && tds[0].innerHTML == tds[3].innerHTML && tds[0].innerHTML == tds[6].innerHTML) {
			return true;
		} else if (tds[1].innerHTML != '' && tds[1].innerHTML == tds[4].innerHTML && tds[1].innerHTML == tds[7].innerHTML) {
			return true;
		} else if (tds[2].innerHTML != '' && tds[2].innerHTML == tds[5].innerHTML && tds[2].innerHTML == tds[8].innerHTML) {
			return true;
		} else if (tds[0].innerHTML != '' && tds[0].innerHTML == tds[4].innerHTML && tds[0].innerHTML == tds[8].innerHTML) {
			return true;
		} else if (tds[2].innerHTML != '' && tds[2].innerHTML == tds[4].innerHTML && tds[2].innerHTML == tds[6].innerHTML) {
			return true;
		} else {
			return false;
		}
	}
	
	// 引き分け判定
	function draw()
	{
		var tds = document.getElementsByTagName('td');
		if(tds[0].innerHTML != '' && tds[1].innerHTML != '' && tds[2].innerHTML != '' && tds[3].innerHTML != '' && tds[4].innerHTML != '' && tds[5].innerHTML != '' && tds[6].innerHTML != '' && tds[7].innerHTML != '' && tds[8].innerHTML != '' ){
			return true;
		}else{
			return false;
		}
	}
  
  // ○と×で攻守交代
	function change_turn()
	{
		if (turn == '○') {
			turn = '×';
		} else {
			turn = '○';
		}
	}

  // 次のゲームへ
	function next()
	{
		var tds = document.getElementsByTagName('td');
		for (var i = 0; i < tds.length; i++) {
			tds[i].innerHTML = '';
		}
		turn = '○';
	} 
}