Set shell = CreateObject("WScript.Shell")

' Jalankan Node.js server.js secara tersembunyi
shell.Run "cmd /c node D:\WISNU\_dev\newdls\server.js", 0, False

' Tampilkan popup notifikasi
MsgBox "Server Antrian berhasil dijalankan di https://localhost:5443", 64, "Server Antrian Aktif"
