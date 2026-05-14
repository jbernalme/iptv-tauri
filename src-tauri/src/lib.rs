use tauri_plugin_sql::{Builder, Migration, MigrationKind};
mod commands;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // ESTA LÍNEA SOLUCIONA EL ERROR DE WEBKIT EN LINUX/WAYLAND
    std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");

    let migrations = vec![Migration {
        version: 1,
        description: "initial",
        sql: include_str!("../migrations/V1__initial.sql"),
        kind: MigrationKind::Up,
    }];
    tauri::Builder::default()
        .plugin(
            Builder::default()
                .add_migrations("sqlite:iptv.db", migrations)
                .build(),
        )
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, commands::myfn])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
