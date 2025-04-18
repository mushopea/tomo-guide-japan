
import { Link } from 'react-router-dom';
import { FileText, Home, CreditCard, Globe, School, Users, Check, ExternalLink } from 'lucide-react';

// App icons
const appIcons = {
  LINE: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzAwQjkwMCIgZD0iTTEyLjUsMjNjMCwwLjctMC42LDEuMy0xLjMsMS4zaC0wLjhjLTAuMiwwLTAuNSwwLjEtMC41LDAuM3YyYzAsMC4yLDAuMiwwLjMsMC41LDAuM2gxLjhDMTMuMSwyNywxNCwyNi4xLDE0LDI1di0zLjljMC0wLjItMC4yLTAuMy0wLjUtMC4zaC0wLjVDMTIuNywyMC44LDEyLjUsMjAuNywxMi41LDIxVjIzeiIvPjxwYXRoIGZpbGw9IiMwMEI5MDAiIGQ9Ik0xNC40LDIxYzAtMC4yLDAuMi0wLjMsMC41LTAuM2gyLjdjMC4yLDAsMC41LDAuMSwwLjUsMC4zdjAuNWMwLDAuMi0wLjIsMC4zLTAuNSwwLjNoLTEuOWMtMC4yLDAtMC4zLDAuMS0wLjMsMC4zdjFjMCwwLjIsMC4xLDAuMywwLjMsMC4zaDAuOWMwLjIsMCwwLjUsMC4xLDAuNSwwLjN2MC41YzAsMC4yLTAuMiwwLjMtMC41LDAuM2gtMC45Yy0wLjIsMC0wLjMsMC4xLTAuMywwLjNWMjZjMCwwLjItMC4yLDAuMy0wLjUsMC4zaC0wLjVjLTAuMiwwLTAuNS0wLjEtMC41LTAuM1YyMXoiLz48cGF0aCBmaWxsPSIjMDBCOTAwIiBkPSJNMjAuMiwyMWMwLTAuMiwwLjItMC4zLDAuNS0wLjNoMC41YzAuMiwwLDAuNSwwLjEsMC41LDAuM3Y0LjFjMCwwLjIsMC4xLDAuMywwLjMsMC4zaDAuOWMwLjIsMCwwLjUsMC4xLDAuNSwwLjN2MC41YzAsMC4yLTAuMiwwLjMtMC41LDAuM2gtMi4zYy0wLjIsMC0wLjUtMC4xLTAuNS0wLjNWMjF6Ii8+PHBhdGggZmlsbD0iIzAwQjkwMCIgZD0iTTI1LjksMjZjMCwwLjIsMC4yLDAuMywwLjUsMC4zSHI2LjRjMC4yLDAsMC41LTAuMSwwLjUtMC4zdi00LjFjMC0wLjItMC4yLTAuMy0wLjUtMC4zaC0wLjVjLTAuMiwwLTAuNSwwLjEtMC41LDAuM3YzLjJjMCwwLjItMC4xLDAuMy0wLjMsMC4zaC0wLjljLTAuMiwwLTAuMy0wLjEtMC4zLTAuM1YyMWMwLTAuMi0wLjItMC4zLTAuNS0wLjNoLTAuNWMtMC4yLDAtMC41LDAuMS0wLjUsMC4zdjEuMWMwLDAuMi0wLjEsMC4zLTAuMywwLjNoLTAuOWMtMC4yLDAtMC4zLTAuMS0wLjMtMC4zVjIxYzAtMC4yLTAuMi0wLjMtMC41LTAuM2gtMC41Yy0wLjIsMC0wLjUsMC4xLTAuNSwwLjNWMjZ6Ii8+PGNpcmNsZSBmaWxsPSIjMDBCOTAwIiBjeD0iMjQiIGN5PSIyNCIgcj0iMTkiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzMuOSwyMC4xSDMzQzMyLjgsMjAuMSwzMi44LDIwLDMyLjgsMTkuOFYxOWMwLTAuMiwwLjEtMC4yLDAuMy0wLjJoMC44YzIsMCwzLjYsMS42LDMuNiwzLjZWMjZjMCwwLjItMC4xLDAuMy0wLjMsMC4zaC0wLjVjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMy41QzM2LjQsMjEuMiwzNS4yLDIwLjEsMzMuOSwyMC4xeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNC4zLDI2Yy0wLjIsMC0wLjMtMC4xLTAuMy0wLjN2LTMuOWMwLTAuMiwwLjEtMC4zLDAuMy0wLjNoMC41YzAuMiwwLDAuMywwLjEsMC4zLDAuM1YyNWMwLDAuOSwwLjgsMS43LDEuNywxLjdoMS44YzAuMiwwLDAuMy0wLjEsMC4zLTAuM3YtMC44YzAtMC4yLTAuMS0wLjMtMC4zLTAuM2gtMC44Yy0wLjYsMC0xLjEtMC41LTEuMS0xLjF2LTEuNWMwLTAuNiwwLjUtMS4xLDEuMS0xLjFoMi4zYzAuMiwwLDAuMywwLjEsMC4zLDAuM3Y1YzAsMC4yLTAuMSwwLjMtMC4zLDAuM2gtNS41VjI2eiBNMTguMiwyMy41YzAsMC4yLDAuMSwwLjMsMC4zLDAuM2gwLjljMC4yLDAsMC4zLTAuMSwwLjMtMC4zdi0wLjVjMC0wLjItMC4xLTAuMy0wLjMtMC4zaC0wLjljLTAuMiwwLTAuMywwLjEtMC4zLDAuM1YyMy41eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMS44LDI2Yy0wLjIsMC0wLjMtMC4xLTAuMy0wLjNWMjFjMC0wLjIsMC4xLTAuMywwLjMtMC4zaDAuNWMwLjIsMCwwLjMsMC4xLDAuMywwLjN2NC4xYzAsMC4yLDAuMSwwLjMsMC4zLDAuM2gwLjljMC4yLDAsMC4zLTAuMSwwLjMtMC4zdi0wLjVjMC0wLjItMC4xLTAuMy0wLjMtMC4zaC0wLjRjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41YzAtMC4yLDAuMS0wLjMsMC4zLTAuM2gxLjRjMC4yLDAsMC4zLDAuMSwwLjMsMC4zVjI2YzAsMC4yLTAuMSwwLjMtMC4zLDAuM0gyMS44eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yOS43LDI2Yy0wLjIsMC0wLjMtMC4xLTAuMy0wLjNWMjJjMC0wLjYtMC41LTEuMS0xLjEtMS4xaC0xLjRjLTAuMiwwLTAuMywwLjEtMC4zLDAuM3Y0LjVjMCwwLjItMC4xLDAuMy0wLjMsMC4zaC0wLjVjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtNWMwLTAuMiwwLjEtMC4zLDAuMy0wLjNoMi44YzAuOSwwLDEuNywwLjgsMS43LDEuN3YzLjljMCwwLjItMC4xLDAuMy0wLjMsMC4zSDI5Ljd6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMxLDI2Yy0wLjIsMC0wLjMtMC4xLTAuMy0wLjN2LTVjMC0wLjIsMC4xLTAuMywwLjMtMC4zaDMuNmMwLjYsMCwxLjEsMC41LDEuMSwxLjFjMCwwLjQtMC4yLDAuNy0wLjUsMWMwLjQsMC4yLDAuNywwLjcsMC43LDEuMmMwLDAuNy0wLjYsMS4zLTEuMywxLjNIMzFWMjZ6IE0zNC41LDIyLjhjMC4yLDAsMC4zLTAuMSwwLjMtMC4zcy0wLjEtMC4zLTAuMy0wLjNoLTIuN2MtMC4yLDAtMC4zLDAuMS0wLjMsMC4zdjAuNWMwLDAuMiwwLjEsMC4zLDAuMywwLjNoMi43VjIyLjh6IE0zNC43LDI0LjljMC4zLDAsMC41LTAuMiwwLjUtMC41cy0wLjItMC41LTAuNS0wLjVoLTIuOWMtMC4yLDAtMC4zLDAuMS0wLjMsMC4zdjFjMCwwLjIsMC4xLDAuMywwLjMsMC4zaDIuOVYyNC45eiIvPjwvc3ZnPg==",
  PayPay: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzAwOTlmOCIgZD0iTTEwIDI0QzkuODA2IDI0IDkuNjIgMjMuOTI2IDkuNDU3IDIzLjc5NUw0LjIxMiAxOS4zODVDMy45MjcgMTkuMTQ2IDMuODkxIDE4LjcxNiA0LjEzIDE4LjQzMUM0LjM2OSAxOC4xNDYgNC43OTkgMTguMTEgNS4wODQgMTguMzQ5TDkuNTk4IDIyLjE1MUMxMC40NjcgMjIuODgzIDExLjcyMSAyMi45NTcgMTIuNjcxIDIyLjMxOUwxOC44MzMgMTguMTg1QzE5LjkwNCAxNy40NTUgMjEuMzA5IDE3LjQ5OCAyMi4zMzUgMTguMjg0TDI2LjQxNCAyMS4zOTZDMjYuNTMzIDIxLjQ4NiAyNi42NDggMjEuNTUzIDI2Ljc1NyAyMS40OTdDMjYuOTQ0IDIxLjM5OCAyNi45NzQgMjEuMiAyNi45ODcgMjEuMDU3TDI3LjEgMTguMzg1QzI3LjEyOCAxOC4wMzQgMjcuMzQxIDE3LjczOSAyNy42NTYgMTcuNjA4QzI3Ljk3MiAxNy40NzcgMjguMzI1IDE3LjUzNiAyOC41ODEgMTcuNzUzTDM0LjE0NyAyMi40ODdDMzUuMjYxIDIzLjQ1NyAzNi45MjcgMjMuMzYxIDM3LjkzNiAyMi4yNjVMMzkuNzM5IDIwLjMwN0M0MC4wMDYgMjAuMDE5IDQwLjQzNyAyMC4wMDIgNDAuNzI1IDIwLjI2OUM0MS4wMTIgMjAuNTM1IDQxLjAzIDIwLjk2NyA0MC43NjMgMjEuMjU0TDM4Ljk2IDIzLjIxM0MzNy4zOTUgMjQuOTE1IDM0LjcwNiAyNS4wNjQgMzIuOTU1IDIzLjU0N0wyNy42MDkgMTguOTg4TDI3LjUxNyAyMS4xMDFDMjcuNDYyIDIxLjc5NCAyNy4xMjEgMjIuNDAyIDI2LjU3OSAyMi43ODlDMjYuMDQyIDIzLjE3NSAyNS4zMzkgMjMuMzE2IDI0LjY3NSAyMy4xNzVDMjQuNDQ4IDIzLjEyOSAyNC4yMjYgMjMuMDQ5IDI0LjAxNiAyMi45NDRDMTYUQ0L4ODI2IDIyLjgwNyAyMy42NjggMjIuNjE2IDIzLjU0NyAyMi40MjhMMTkuNDY5IDE5LjMxNkMxOC45NzMgMTguOTQzIDE4LjI3OCAxOC45MjEgMTcuNzU5IDE5LjI2NEwxMS41OTcgMjMuMzk4QzEwLjA4MSAyNC40NDQgOCA0MC4yNzMgMTAuNDMxIDI0LjEyNkMxMC4yOTMgMjQuMDQxIDEwLjE0NyAyNCAxMCAyNHoiLz48cGF0aCBmaWxsPSIjZmY3NzNjIiBkPSJNMTkuNDc3IDI2LjQ2NEMxOS4yNjggMjYuNDY0IDE5LjA1OSAyNi4zOTUgMTguODgyIDI2LjI1NUwxMC42MTEgMTkuODc1QzEwLjMwNyAxOS42MzUgMTAuMjYyIDE5LjIwNCAxMC41MDMgMTguOTAxQzEwLjc0MyAxOC41OTcgMTEuMTc0IDE4LjU1MiAxMS40NzcgMTguNzkzTDE5Ljc0OSAyNS4xNzJDMjAuMDUzIDI1LjQxMyAyMC4wOTggMjUuODQ0IDE5Ljg1NyAyNi4xNDdDMTkuNzM4IDI2LjM1IDE5LjYwOCAyNi40NjQgMTkuNDc3IDI2LjQ2NHpNMzAgMjYuNDc1QzI5Ljg3NSAyNi40NzUgMjkuNzUgMjYuNDI4IDI5LjY0MSAyNi4zMzVMMjQuODU4IDIyLjE0OUMyNC42MDQgMjEuOTI2IDI0LjU3OSAyMS41MzggMjQuODAyIDIxLjI4NUMyNS4wMjYgMjEuMDMyIDI1LjQxNCAyMS4wMDYgMjUuNjY3IDIxLjIyOUwzMC40NSAyNS40MTVDMzAuNzA0IDI1LjYzOCAzMC43MjkgMjYuMDI2IDMwLjUwNiAyNi4yNzlDMzAuMzgyIDI2LjQxOSAzMC4xOTEgMjYuNDc1IDMwIDI2LjQ3NXpNMTQgMzEuNDc1QzEzLjg2NSAzMS40NzUgMTMuNzMxIDMxLjQyMiAxMy42MTYgMzEuMzE4TDExLjIyNyAyOS4yMDNDMTAuOTc4IDI4Ljk4NyAxMC45NDggMjguNjEgMTEuMTYzIDI4LjM2MUMxMS4zNzkgMjguMTEyIDExLjc1NiAyOC4wODIgMTIuMDA1IDI4LjI5OEwxNC4zOTQgMzAuNDEzQzE0LjY0MyAzMC42MjggMTQuNjc0IDMxLjAwNSAxNC40NTggMzEuMjU0QzE0LjM0MSAzMS4zOTYgMTQuMTcxIDMxLjQ3NSAxNCAzMS40NzV6TTMzIDM0Ljg2MkMzMi44ODYgMzQuODYyIDMyLjc3MSAzNC44MzIgMzIuNjY2IDM0Ljc2NkMzMi4zNjIgMzQuNTc4IDMyLjI1NSAzNC4xNzkgMzIuNDQ0IDMzLjg3NkwzNC43NzggMjkuODc2QzM0Ljk2NiAyOS41NzIgMzUuMzY1IDI5LjQ2NSAzNS42NjggMjkuNjU0QzM1Ljk3MSAyOS44NDIgMzYuMDc4IDMwLjI0MSAzNS44OSAzMC41NDRMMzMuNTU2IDM0LjU0NEMzMy40MzEgMzQuNzQ5IDMzLjIxOSAzNC44NjIgMzMgMzQuODYyek0zNSAzOS40NzlDMzQuODUyIDM5LjQ3OSAzNC43MDQgMzkuNDMxIDM0LjU3NSAzOS4zMjVDMzQuMzMxIDM5LjEyNiAzNC4yOTUgMzguNzcgMzQuNDk0IDM4LjUyNUwzOC40OTQgMzMuNTI1QzM4LjY5NCAzMy4yODEgMzkuMDUgMzMuMjQ0IDM5LjI5NCAzMy40NDRDMzkuNTM4IDMzLjY0NCAzOS41NzUgMzMuOTk5IDM5LjM3NSAzNC4yNDNMMzUuMzc1IDM5LjI0M0MzNS4yNjQgMzQuMzk2IDM1LjEzMiAzOS40NzkgMzUgMzkuNDc5ek0xNyAzOC44NjJDMTYuODg2IDM4Ljg2MiAxNi43NzEgMzguODMyIDE2LjY2NiAzOC43NjZDMTYuMzYyIDM4LjU3OCAxNi4yNTUgMzguMTc5IDE2LjQ0NCAzNy44NzZMMjMuNDQ0IDI1Ljg3NkMyMy42MzIgMjUuNTcyIDI0LjAzMSAyNS40NjUgMjQuMzM0IDI1LjY1NEMyNC42MzcgMjUuODQyIDI0Ljc0NCAyNi4yNDEgMjQuNTU2IDI2LjU0NEwxNy41NTYgMzguNTQ0QzE3LjQzMSAzOC43NDkgMTcuMjE5IDM4Ljg2MiAxNyAzOC44NjJ6TTIzIDQzLjQ3OEMyMi44NjcgNDMuNDc4IDIyLjczMyA0My40MjUgMjIuNjIyIDQzLjMyOUMyMi4zNzYgNDMuMTA4IDIyLjM1MiA0Mi43MyAyMi41NzQgNDIuNDg0TDM5LjU3NCAyMy40ODRDMzkuNzk1IDIzLjIzOSA0MC4xNzMgMjMuMjE0IDQwLjQxOSAyMy40MzVDNDAuNjY1IDIzLjY1NyA0MC42ODkgMjQuMDM1IDQwLjQ2OCAyNC4yODFMMjMuNDY4IDQzLjI4MUMyMy4zNDkgNDMuNDE1IDIzLjE3NCA0My40NzggMjMgNDMuNDc4ek0yOCA0My45QzI3Ljg1NyA0My45IDI3LjcxNCA0My44NTYgMjcuNTg1IDQzLjc1OEMyNy4zMzQgNDMuNTcgMjcuMjg1IDQzLjIxNyAyNy40NzMgNDIuOTY3TDI5LjEzOSA0MC43NzNDMjkuMzI3IDQwLjUyMyAyOS42OCA0MC40NzMgMjkuOTI5IDQwLjY2MUMzMC4xOCA0MC44NDkgMzAuMjI5IDQxLjIwMiAzMC4wNDEgNDEuNDUyTDI4LjM3NSA0My42NDZDMDI4LjI1MSA0My44MTIgMjguMTI1IDQzLjkgMjggNDMuOXoiLz48L3N2Zz4=",
  Suica: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzkyQ0UxQyIgZD0iTTI0LDJjMTIuMTUsMCwyMiw5Ljg1LDIyLDIycy05Ljg1LDIyLTIyLDIyUzIsMzYuMTUsMiwyNFMxMS44NSwyLDI0LDJ6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIyIDEyLjFjLS45IDAtMS42LjctMS42IDEuNlYyNGMwIC45LjcgMS42IDEuNiAxLjZoMTJjLjkgMCAxLjYtLjcgMS42LTEuNnYtNC41YzAtLjUtLjQtLjktLjktLjloLTEuMmMtLjUgMC0uOS0uNC0uOS0uOXYtNEMyMi43IDEyLjggMjIgMTIuMSAyMiAxMi4xek0xMy4zIDE0LjZDMTEuNSAxNC42IDEwIDE2IDEwIDE3LjhWMjUuNWMwIDEuOCAxLjUgMy4yIDMuMyAzLjJoMi41Yy41IDAgLjktLjQuOS0uOVYxNS41YzAtLjUtLjQtLjktLjktLjlIMTMuM3oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjAgMjYuOEMxOC4xIDI2LjggMTYuNiAyOC4yIDE2LjYgMzBWMzUuM2MwIDEuOCAxLjUgMy4yIDMuMyAzLjJIND0uMWMuNSAwIC45LS40LjktLjl2LTkuOGMwLS41LS40LS45LS45LS45SDIwek0yOC4xIDI5LjRjLjkgMCAxLjYuNyAxLjYgMS42djQuMmMwIC45LS43IDEuNi0xLjYgMS42SDIwYy0uOSAwLTEuNi0uNy0xLjYtMS42VjMxYzAtLjkuNy0xLjYgMS42LTEuNkgyOC4xeiIvPjwvc3ZnPg==",
  PASMO: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjIiIGZpbGw9IiMwMDM3OWQiLz48cmVjdCB4PSIxNCIgeT0iMTQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjMuMzUiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIxOCIgeT0iMTgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIGZpbGw9IiMwMDM3OWQiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyLjUiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
  GoogleTranslate: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iIzQwQzhGNCIgZD0iTTExLDQwaDZ2NmgtNlY0MHoiLz48cGF0aCBmaWxsPSIjMjVBMzY2IiBkPSJNMTEsN0gzdjhoOFY3eiIvPjxwYXRoIGZpbGw9IiNGQzNENTEiIGQ9Ik0xMSwyNnY4aDhoLThWMjZ6Ii8+PHBhdGggZmlsbD0iI0ZGQkEwMCIgZD0iTTQwLDE5SDMydjhoOFYxOXoiLz48cGF0aCBmaWxsPSIjMDBBRjVCIiBkPSJNMTEsMTl2N2g3di03SDE4SDExeiIvPjxwYXRoIGZpbGw9IiMwMDk1RkYiIGQ9Ik0xMSw3djhoOFY3SDExeiIvPjxwYXRoIGZpbGw9IiNGRjQwMzEiIGQ9Ik0zMiwxOVY3aC04djhsOCw4di00SDE5djhoNnY2aDdWMTlaIi8+PHBhdGggZmlsbD0iI0ZGQzEwNyIgZD0iTTMyLDdWMTl2NABIM3YtOGgxNlY3SDMyeiIvPjwvc3ZnPg==",
  Mercari: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCI+PHBhdGggZmlsbD0iI0ZGMDExMSIgZD0iTTIwLjkgNUgzOC4zQzQxLjUgNSA0NCA3LjUgNDQgMTAuNlYzOC40QzQ0IDQxLjUgNDEuNSA0NCAzOC40IDQ0SDEwLjZDNy41IDQ0IDUgNDEuNSA1IDM4LjRWMjdMMTAgMjJMMTUgMjdMMjAuOSA1eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0zMy4xNjkgMTdDMzcuNTc2IDE3IDQxIDE5LjM5NiA0MSAyMi40NDRWMjYuODNDNDEgMjkuOTcgMzcuNTg1IDMyLjM2NyAzMy4xNjkgMzIuMzY3QzI4Ljc2MiAzMi4zNjcgMjUuMzM4IDI5Ljk3MSAyNS4zMzggMjYuODNWMjIuNDQ0QzI1LjMzOCAxOS4zOTYgMjguNzYyIDE3IDMzLjE2OSAxN3oiLz48cGF0aCBmaWxsPSIjRkYwMTExIiBkPSJNMzMuMTQ5IDE5LjI5NUMzNS43NyAxOS4yOTUgMzcuOTE1IDIwLjc4MSAzNy45MTUgMjIuNjI3VjI2LjY2OUMzNy45MTUgMjguNTE3IDM1Ljc3IDMwLjAwMyAzMy4xNDkgMzAuMDAzQzMwLjUyOSAzMC4wMDMgMjguMzY0IDI4LjUxNyAyOC4zNjQgMjYuNjY5VjIyLjYyN0MyOC4zNjQgMjAuNzgyIDMwLjUyOSAxOS4yOTUgMzMuMTQ5IDE5LjI5NXoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTQuNzg3IDE3LjA3OUMxOS4yNiAxNy4wNzkgMjIuNzI0IDE5LjUwMiAyMi43MjQgMjIuNTg1VjI3LjAyQzIyLjcyNCAzMC4xOTcgMTkuMjYgMzIuNjE5IDE0Ljc4NyAzMi42MTlDMTAuMzE2IDMyLjYxOSA2Ljg1MyAzMC4xOTcgNi44NTMgMjcuMDJWMjIuNTg1QzYuODUzIDE5LjUwMiAxMC4zMTYgMTcuMDc5IDE0Ljc4NyAxNy4wNzl6Ii8+PHBhdGggZmlsbD0iI0ZGMDExMSIgZD0iTTE0LjgwMyAyMC4wMDlDMTIuMTQ4IDIwLjAwOCA5Ljk2NiAyMS4zODIgOS45NjYgMjMuMTAyVjI2LjgyQzkuOTY2IDI4LjU0MiAxMi4xNDggMjkuOTE2IDE0LjgwMyAyOS45MTZDMTcuNDU5IDI5LjkxNiAxOS42NDEgMjguNTQyIDE5LjY0MSAyNi44MlYyMy4xMDJDMTkuNjQxIDIxLjM4MiAxNy40NTggMjAuMDA4IDE0LjgwMyAyMC4wMDl6Ii8+PC9zdmc+",
};

const movingGuideSteps = [
  {
    id: "visa",
    category: "BEFORE ARRIVAL",
    title: "Get a Visa",
    content: (
      <>
        <p className="mb-4">
          To move to Japan, you'll need a visa — the most common are a Work Visa (requires a job offer) or the new Digital Nomad Visa (for remote workers from select countries). If you're job hunting, check out:
        </p>
        <ul className="mb-4 space-y-1 list-disc ml-6">
          <li><a href="https://jobs.gaijinpot.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">GaijinPot</a></li>
          <li><a href="https://jobsinjapan.com" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Jobs in Japan</a></li>
          <li><a href="https://www.daijob.com/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Daijob</a></li>
          <li><a href="https://jetprogramme.org/en/positions/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">JET Programme</a></li>
        </ul>
        <p>
          Once you've got your Certificate of Eligibility, apply for your visa through your <a href="https://www.mofa.go.jp/j_info/visit/visa/index.html" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">local Japanese embassy</a>. Apply at least 1.5 months before departure.
        </p>
      </>
    )
  },
  {
    id: "name",
    category: "BEFORE ARRIVAL",
    title: "Set Up Your Japanese Name",
    content: (
      <>
        <p className="mb-2">
          Create your katakana name — it'll be used in forms and legal docs. Try this <a href="https://nihongotools.com/foreign-name-to-japanese-name-converter/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">name converter tool</a>.
        </p>
      </>
    )
  },
  {
    id: "preparations",
    category: "BEFORE ARRIVAL",
    title: "Do preparations in your home country",
    content: (
      <>
        <ul className="mb-4 space-y-4">
          <li>
            <strong className="block mb-1">Finances:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Get international ATM access</li>
              <li>Apply for a travel-friendly credit card</li>
              <li>For money transfers, use Wise or OFX</li>
            </ul>
          </li>
          <li>
            <strong className="block mb-1">Driving:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Apply for an <a href="https://jp.usembassy.gov/services/driving-in-japan/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">International Driving Permit</a></li>
            </ul>
          </li>
          <li>
            <strong className="block mb-1">Medication:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Check if your meds are legal in Japan</li>
              <li>Bring printed prescriptions</li>
            </ul>
          </li>
          <li>
            <strong className="block mb-1">Electronics:</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Japan uses Type A/B plugs, 100V voltage</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "housing",
    category: "BEFORE ARRIVAL",
    title: "Find Housing",
    content: (
      <>
        <p className="mb-4">
          You'll need at least temporary housing to get a phone number and bank account.
        </p>
        <div className="mb-4">
          <strong className="block mb-2">Long-term rental listings:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://apartment-japan.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Apartment Japan</a></li>
            <li><a href="https://realestate.co.jp/en" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Real Estate Japan</a></li>
            <li><a href="https://apartments.gaijinpot.com/en" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">GaijinPot Apartments</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <strong className="block mb-2">Short-term/foreigner-friendly housing:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li>Monthly rentals: <a href="https://www.realestate-tokyo.com/rent/monthly-apartments/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Real Estate Tokyo</a> / <a href="https://atinn.jp/en" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">At Inn</a></li>
            <li>Sharehouses: <a href="https://www.sakura-house.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Sakura House</a> / <a href="https://www.oakhouse.jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Oak House</a></li>
          </ul>
        </div>
        <p className="text-sm text-gray-600">Note: Some rentals don't accept foreigners or pets and may require a guarantor.</p>
      </>
    )
  },
  {
    id: "registration",
    category: "AFTER ARRIVAL",
    title: "Complete Legal Registration",
    content: (
      <>
        <ul className="list-disc ml-6 space-y-2">
          <li>Get your residence (zairyu) card at the airport</li>
          <li>Register your address at your local ward office within 14 days</li>
          <li>Enroll in National Health Insurance (covers 70% of medical costs)</li>
        </ul>
      </>
    )
  },
  {
    id: "phone",
    category: "AFTER ARRIVAL",
    title: "Get a Phone Number",
    content: (
      <>
        <p className="mb-4">
          You'll need a Japanese phone number to open a bank account or sign a lease.
        </p>
        <div className="mb-4">
          <strong className="block mb-2">Friendly SIM providers:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.sakuramobile.jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Sakura Mobile</a></li>
            <li><a href="https://www.mobal.com/japan/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Mobal</a></li>
            <li><a href="https://www.iijmio.jp/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">IIJmio</a></li>
          </ul>
        </div>
        <p>Bring your passport and residence card.</p>
      </>
    )
  },
  {
    id: "bank",
    category: "AFTER ARRIVAL",
    title: "Get a Bank Account",
    content: (
      <>
        <p className="mb-4">
          Required for receiving salary, signing leases, and setting up utilities.
        </p>
        <div className="mb-4">
          <strong className="block mb-2">Foreigner-friendly banks:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.smbctb.co.jp/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">SMBC Prestia</a></li>
            <li><a href="https://www.shinseibank.com/english/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Shinsei Bank</a></li>
          </ul>
        </div>
        <p>Bring passport, residence card, Japanese phone number, and proof of address.</p>
      </>
    )
  },
  {
    id: "credit",
    category: "AFTER ARRIVAL",
    title: "Get a Credit Card",
    content: (
      <>
        <div className="mb-4">
          <strong className="block mb-2">Recommended cards for newcomers:</strong>
          <ul className="list-disc ml-6 space-y-1">
            <li><a href="https://www.rakuten-card.co.jp/e_card/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Rakuten Card</a></li>
            <li><a href="https://www.eposcard.co.jp/international/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">EPOS Card</a></li>
          </ul>
        </div>
        <p>Bring residence card, phone number, and income information.</p>
      </>
    )
  },
  {
    id: "utilities",
    category: "AFTER ARRIVAL",
    title: "Set Up Your Utilities",
    content: (
      <>
        <p className="mb-4">
          You'll need a Japanese bank account and phone number to set up internet, gas, water, and electricity.
        </p>
        <p>Utility providers often offer online forms — have your move-in date and address ready.</p>
      </>
    )
  },
  {
    id: "essentials",
    category: "AFTER ARRIVAL",
    title: "Apply for Essentials",
    content: (
      <>
        <ul className="mb-4 space-y-3">
          <li>
            <strong className="block mb-1">MyNumber card (national ID):</strong> 
            Apply after address registration. <a href="https://www.kojinbango-card.go.jp/en-kofushinse/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">More info</a>
          </li>
          <li>
            <strong className="block mb-1">National Pension:</strong> 
            Visit local ward office to enroll or request exemption
          </li>
          <li>
            <strong className="block mb-1">Local Clinics & Schools:</strong> 
            Use Tokyo's <a href="https://www.himawari.metro.tokyo.jp/qq13/qqport/kenmintop/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">English-friendly clinic directory</a>.
            Also check <a href="https://www.reddit.com/r/japanlife/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">r/japanlife</a> for expat advice.
          </li>
        </ul>
        
        <div>
          <strong className="block mb-2">Popular Japanese Apps:</strong>
          <ul className="space-y-3">
            <li className="flex items-center">
              <img src={appIcons.LINE} alt="LINE" className="w-6 h-6 mr-2" />
              <span>LINE – Main messaging app: <a href="https://line.me/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.PayPay} alt="PayPay" className="w-6 h-6 mr-2" />
              <span>PayPay – Mobile payments: <a href="https://paypay.ne.jp/en/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.Suica} alt="Suica" className="w-6 h-6 mr-2" />
              <span>Suica (iOS): <a href="https://apps.apple.com/jp/app/suica/id1156875272" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a> / </span>
              <img src={appIcons.PASMO} alt="PASMO" className="w-6 h-6 mx-2" />
              <span>PASMO (Android): <a href="https://play.google.com/store/apps/details?id=jp.pasmo.app" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.GoogleTranslate} alt="Google Translate" className="w-6 h-6 mr-2" />
              <span>Google Translate – Menu/sign translation: <a href="https://translate.google.com/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
            <li className="flex items-center">
              <img src={appIcons.Mercari} alt="Mercari" className="w-6 h-6 mr-2" />
              <span>Mercari – Secondhand goods marketplace: <a href="https://www.mercari.com/jp/" className="text-tomodachi-red hover:underline" target="_blank" rel="noopener noreferrer">Download</a></span>
            </li>
          </ul>
        </div>
      </>
    )
  }
];

const StepByStepGuide = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <div className="mb-16 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-xl font-bold mb-4 text-tomodachi-black">Table of Contents</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">BEFORE ARRIVAL</h4>
                <ul className="space-y-2">
                  {movingGuideSteps.filter(step => step.category === "BEFORE ARRIVAL").map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 font-medium">{index + 1}.</span>
                      <button 
                        onClick={() => scrollToSection(step.id)}
                        className="text-tomodachi-red hover:underline text-left"
                      >
                        {step.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-700 mb-2">AFTER ARRIVAL</h4>
                <ul className="space-y-2">
                  {movingGuideSteps.filter(step => step.category === "AFTER ARRIVAL").map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 font-medium">{index + 5}.</span>
                      <button 
                        onClick={() => scrollToSection(step.id)}
                        className="text-tomodachi-red hover:underline text-left"
                      >
                        {step.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Guide Content */}
          <div className="space-y-16">
            {/* Before Arrival Section */}
            <div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-8 pb-2 border-b border-gray-200">BEFORE YOU ARRIVE IN JAPAN</h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {movingGuideSteps.filter(step => step.category === "BEFORE ARRIVAL").map((step, index) => (
                  <div key={index} id={step.id} className="mb-12 relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tomodachi-red text-white flex items-center justify-center font-bold text-lg z-10 relative  border-4 ">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-xl font-bold text-tomodachi-black mb-4">{step.title}</h4>
                          {step.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* After Arrival Section */}
            <div>
              <h3 className="text-xl font-bold text-tomodachi-black mb-8 pb-2 border-b border-gray-200">WHEN YOU ARRIVE IN JAPAN</h3>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {movingGuideSteps.filter(step => step.category === "AFTER ARRIVAL").map((step, index) => (
                  <div key={index} id={step.id} className="mb-12 relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tomodachi-red text-white flex items-center justify-center font-bold text-lg z-10 relative  border-4 ">
                        {index + 5}
                      </div>
                      <div className="flex-grow">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                          <h4 className="text-xl font-bold text-tomodachi-black mb-4">{step.title}</h4>
                          {step.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Moving Checklist */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-tomodachi-black mb-6">Tomodachi Moving Checklist</h3>
            <p className="text-gray-600 mb-8">
              Stay organized with our comprehensive checklist for your move to Japan. Track your progress and ensure nothing is forgotten.
            </p>
            <div className="text-center">
              <button 
                className="btn-primary inline-flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                <Check className="mr-2 h-5 w-5" />
                Download Printable PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
