const fs=require("fs");
const path=require("path");
const glob=require("glob");
const {promisify}=require("util");

const match_files_path=path.resolve(__dirname,"../docs/**/*.md");
const write_file_path=path.resolve(__dirname,"../scripts/combo.md");

(async ()=>{
  const match_result=await promisify(glob)(match_files_path);
  const read_task=match_result.map(async (match_single_file)=>{
    const markdown_content=await promisify(fs.readFile)(match_single_file);
    return markdown_content;
  });
  const combo_result=await Promise.all(read_task);
  await promisify(fs.writeFile)(write_file_path,combo_result.join("\n"));
})();