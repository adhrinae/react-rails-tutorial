class CreateRecords < ActiveRecord::Migration[5.0]
  def change
    create_table :records do |t|
      t.string :title
      t.date :date
      t.integer :amount

      t.timestamps
    end
  end
end
