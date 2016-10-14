class RecordsController < ApplicationController
  def index
    @records = Record.all
  end
  
  def create
    @record = Record.new(record_params)
    
    if @record.save
      render json: @record
    else
      render json: @record.errors, status: 422
    end
  end
  
  private
  
    def record_params
      params.require(:record).permit(:title, :date, :amount)
    end
end
